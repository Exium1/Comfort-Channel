import express from 'express';
import unogs from '../services/unogs.js';

import showModel from '../database/models/show.js';
import userModel from '../database/models/user.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('/search');
});

/*
	Search for a show given a platform and title. Called by front end to display options when searching
*/
router.get('/show', async (req, res) => {

	const query = req.query.query;
	const platform = req.query.platform.toLowerCase().trim();
	const userID = req.headers.authorization.split(" ")[1];
	
	if (!query) {res.send("You need to provide a search query"); return;}
	if (!platform) {res.send("You need to provide a platform"); return;}
	
	console.log(`Received a request to search for "${query}" on ${platform}`)

	let data = null;
	let user = await userModel.findOne({ _id: userID });
	if (!user) user = await new userModel({ _id: userID }).save();

	switch (platform) {
		case "netflix":
			data = await unogs.queryShows(query, true);
			break;

		default:
			res.send("Platform not supported");
			return;
	}

	if (!data) {res.send("No shows found"); return;}

	// Save shows to the database if they don't already exist
	for (let show of data.shows) {
		const dbShow = await showModel.findOne({platform: platform, showID: show.showID});

		if (!dbShow) {
			await new showModel({
				platform: platform,
				showID: show.showID,
				title: show.title,
				image: show.image,
				poster: show.poster,
				synopsis: show.synopsis,
				seasons: []
			}).save();
		}
	}

	// Check if the show is already in the user's channel
	for (let show of data.shows) {
		const dbShow = await showModel.findOne({platform: platform, showID: show.showID});
		const userShow = user.channel.find((temp) => temp.show_id == dbShow._id.toString());

		show.seasonCount = dbShow.seasons.length;
		show.episodeCount = 0;

		if (!userShow) show.added = 0;
		else {

			let userSeasonEpCount = {};

			for (let episode of userShow.selectedEpisodes) {
				if (!userSeasonEpCount[episode.seasonID]) userSeasonEpCount[episode.seasonID] = 0;
				userSeasonEpCount[episode.seasonID]++;
			}

			let dbSeasonEpCount = {};

			for (let season of dbShow.seasons) {
				dbSeasonEpCount[season.seasonID] = season.episodes.length;
				show.episodeCount = season.episodes.length;
			}


			if (Object.keys(userSeasonEpCount).length == Object.keys(dbSeasonEpCount).length) {

				let equal = true;
				
				for (let seasonID in dbSeasonEpCount) {
					if (userSeasonEpCount[seasonID] != dbSeasonEpCount[seasonID]) {
						equal = false;
						break;
					}
				}

				if (equal) show.added = 2;
				else show.added = 1;
			} else show.added = 1;
		}
	}

	res.status(200).send(data);
});

router.get('/show/:id', async (req, res) => {

	const showID = req.params.id;
	const platform = req.query.platform.toLowerCase().trim();
	
	if (!showID) {res.send("You need to provide a show ID"); return;}
	if (!platform) {res.send("You need to provide a platform"); return;}
	
	console.log(`Received a request to search for show with ID ${showID} on ${platform}`)

	let data = {}

	// See if show exists in database before querying
	const dbShow = await showModel.findOne({ platform: platform, showID: showID });

	if (dbShow && dbShow.seasons.length > 0) {
		data = {
			platform: platform,
			showID: showID,
			seasons: dbShow.seasons
		}
	} else {
		switch (platform) {
			case "netflix":
				data = await unogs.queryEpisodes(showID, true);
				break;
			default:
				res.send("Platform not supported");
				return;
		}
		
		// If the show exists with no seasons, update the database
		if (dbShow && dbShow.seasons.length == 0) {
			dbShow.seasons = data.seasons;
			await dbShow.save();
		}
	}

	const test = {
		
	}

	res.status(200).send(data);
});

export { router as searchRoutes }