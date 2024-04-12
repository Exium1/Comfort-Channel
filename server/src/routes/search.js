import express from 'express';
import unogs from '../services/unogs.js';

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
	
	if (!query) {res.send("You need to provide a search query"); return;}
	if (!platform) {res.send("You need to provide a platform"); return;}
	
	console.log(`Received a request to search for "${query}" on ${platform}`)

	let data = null;

	switch (platform) {
		case "netflix":
			data = await unogs.queryShows(query, true);
			break;
		default:
			res.send("Platform not supported");
	}

	console.log(`Queried ${platform} for ${query}:`)
	console.log(data)

	res.status(200).send(data);
});

router.get('/show/:id', async (req, res) => {

	
	const showID = req.params.id;
	const platform = req.query.platform.toLowerCase().trim();
	
	if (!showID) {res.send("You need to provide a show ID"); return;}
	if (!platform) {res.send("You need to provide a platform"); return;}
	
	console.log(`Received a request to search for show with ID ${showID} on ${platform}`)

	let data = {}

	switch (platform) {
		case "netflix":
			data = await unogs.queryEpisodes(showID, true);
			break;
		default:
			res.send("Platform not supported");
			return;
	}

	console.log(`Queried ${platform} for show with ID ${showID}:`)
	console.log(data)

	res.status(200).send(data);
});

export { router as searchRoutes }