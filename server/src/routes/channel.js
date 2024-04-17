import express from 'express';
import axios from 'axios';
import userModel from '../database/models/user.js';
import showModel from '../database/models/show.js';

const router = express.Router();

function gaussian(x, mean, sd) {
    return 1 / (sd * Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * ((x - mean) / sd) ** 2);
}

function weightedRandom(items, weights) {
    var adjWeights = [weights[0]]

    for (var i = 1; i < weights.length; i++) {
        adjWeights.push(weights[i] + adjWeights[i - 1]);
    }

    var rand = Math.random() * adjWeights[adjWeights.length - 1];

    for (var i = 0; i < adjWeights.length; i++) {
        if (adjWeights[i] > rand) {
            return items[i];
        }
    }

    return null;
}

router.get('/', (req, res) => {
    res.send('/channel');
});

router.get('/next', async (req, res) => {

    /*
        - Two modes (shuffle and true shuffle)
        - Sort channel shows by last watched
        - Get only top 50% of these sorted shows (round up if decimal?)
        - Get random one with weights (last watched)
        - Same thing for the selected shows episodes
    */

    console.log("Received a request to get the next show");

    const userID = req.headers.authorization.split(" ")[1];
    const user = await userModel.findById(userID);

    if (!user) {
        res.send("User not found");
        return;
    }

    const sortedShows = user.channel.sort((a, b) => a.lastWatched - b.lastWatched);
    const stepSize = sortedShows.length > 1 ? 1 / (sortedShows.length - 1) : 0;
    const sortedShowsWeights = sortedShows.map((show, index) => gaussian(index * stepSize, 0, 0.35));
    const randomShow = weightedRandom(sortedShows, sortedShowsWeights);

    const sortedShowTitle = []
    
    for (let show of sortedShows) {
        const dbShow = await showModel.findById(show.show_id);
        sortedShowTitle.push(dbShow.title);
    }

    console.log(sortedShowTitle);
    console.log(sortedShowsWeights);

    if (!randomShow) {
        res.send("No shows found");
        return;
    }

    const sortedEpisodes = randomShow.selectedEpisodes.sort((a, b) => a.lastWatched - b.lastWatched);
    const episodeStepSize = sortedEpisodes.length > 1 ? 1 / (sortedEpisodes.length - 1) : 0;
    const sortedEpisodesWeights = sortedEpisodes.map((episode, index) => gaussian(index * episodeStepSize, 0, 0.25));
    const randomEpisode = weightedRandom(sortedEpisodes, sortedEpisodesWeights);

    if (!randomEpisode) {
        res.send("No episodes found");
        return;
    }

    // console.log(sortedEpisodes)

    const show = await showModel.findById(randomShow.show_id);

    if (!show) {
        res.send("Show not found");
        return;
    }

    // const sortedEpisodeTitle = []

    // for (let episode of sortedEpisodes) {
    //     const dbEpisode = show.seasons.find(season => season.seasonID == episode.seasonID).episodes.find(temp => temp.episodeID == episode.episodeID);
    //     sortedEpisodeTitle.push(dbEpisode.title);
    // }

    // const randomEpisodeTitle = show.seasons.find(season => season.seasonID == randomEpisode.seasonID).episodes.find(temp => temp.episodeID == randomEpisode.episodeID).title;

    // console.log(`Selected ${show.title}`);
    // console.log(`Selected ${randomEpisodeTitle}`);
    // console.log(sortedEpisodeTitle);
    // console.log(sortedEpisodesWeights)

    randomShow.lastWatched = Date.now();
    randomEpisode.lastWatched = Date.now();

    user.save();

    switch (show.platform) {
        case "netflix":
            res.send({url: `https://www.netflix.com/watch/${randomEpisode.episodeID}`});
            break;
        case "disney":
            res.send({url: `https://www.disneyplus.com/video/${randomShow.showID}/${randomEpisode.episodeID}`});
            break;
        case "hulu":
            res.send({url: `https://www.hulu.com/watch/${randomShow.showID}/${randomEpisode.episodeID}`});
            break;
        case "amazon":
            res.send({url: `https://www.amazon.com/gp/video/detail/${randomEpisode.episodeID}/ref=atv_dp_share_cu_r`});
            break;
        default:
            res.status(400).send("Platform not supported");
            return;
    }
});

/* 
    Update a channel's show, season, or episode
*/
router.post('/update', async (req, res) => {

    const platform = req.query.platform;
    const showID = req.query.showID;
    const seasonID = req.query.seasonID;
    const episodeID = req.query.episodeID;
    const select = req.query.select === "true";
    const userID = req.headers.authorization.split(" ")[1];

    // Check if the required parameters are provided
    if (!platform) {
        res.send("You need to provide a platform");
        return;
    }

    if (!showID) {
        res.send("You need to provide a showID");
        return;
    }

    if (select == null) {
        res.send("You need to provide a select parameter");
        return;
    }

    // Check if the show exists
    let dbShow = await showModel.findOne({platform: platform, showID: showID});

    if (!dbShow) {
        res.send("Show not found");
        return;
    }

    // If show hasn't been searched for, search for it (gets seasons & episode data)
    if (dbShow.seasons.length == 0) {
        await axios.request({
            url: `http://localhost:3000/search/show/${showID}?platform=${platform}`,
            method: 'GET',
            headers: {
                'Authorization': req.headers.authorization,
            }
        });
    }

    dbShow = await showModel.findOne({platform: platform, showID: showID});

    // Search and create a user if it doesn't exist
    let user = await userModel.findById(userID);
    if (!user) user = await new userModel({_id: userID}).save();

    // Check if the show is already in the user's channel
    let show = null;
    let showIndex = null;
    
    for (let [userShowIndex, userShow] of user.channel.entries()) {
        if (userShow.show_id == dbShow._id.toString()) {
            show = userShow;
            showIndex = userShowIndex;
        }
    }

    if (!show && !select) {
        res.sendStatus(200);
        return;
    }

    if(episodeID) {
        // update episode
        if (select) {
            // select episode
            if (show) {
                const episode = user.channel[showIndex].selectedEpisodes.find(episode => episode.episodeID == episodeID);
            
                if (episode) {
                    res.send("Episode already selected");
                    return;
                }

                user.channel[showIndex].selectedEpisodes.push({episodeID: episodeID, seasonID: seasonID});
                user.save();

            } else {
                user.channel.push({
                    show_id: dbShow._id,
                    selectedEpisodes: [{episodeID: episodeID, seasonID: seasonID}],
                });

                user.save();
            }
        } else {
            // unselect episode
            user.channel[showIndex].selectedEpisodes.pull({episodeID: episodeID});
            user.save();
        }
    } else {
        if(seasonID) {
            // update season
            if (select) {
                // select episode

                const seasonEpisodes = dbShow.seasons.find(season => season.seasonID == seasonID).episodes.map(episode => {
                    return {episodeID: episode.episodeID, seasonID: seasonID};
                });

                if (seasonEpisodes.length == 0) {
                    res.send("Season not found");
                    return;
                }

                if (show) {
                    // Set selected episode as all
                    show.selectedEpisodes = show.selectedEpisodes.filter(episode => episode.seasonID != seasonID);
                    show.selectedEpisodes.push(seasonEpisodes);

                    // user.channel.set(showIndex, show);
                    user.save();
                } else {
                    // Add show to user's channel
                    user.channel.push({
                        show_id: dbShow._id,
                        selectedEpisodes: seasonEpisodes,
                    });

                    user.save();
                }
            } else {
                // unselect episode
                console.log("here");
                console.log(showIndex)
                console.log(seasonID)
                user.channel[showIndex].selectedEpisodes.pull({seasonID: seasonID});
                user.save();
            }
        } else {
            // update entire show
            if (select) {
                const seasonEpisodes = []
                
                dbShow.seasons.forEach(season => {
                    season.episodes.forEach(episode => {
                        seasonEpisodes.push({
                            seasonID: season.seasonID,
                            episodeID: episode.episodeID,
                        });
                    });
                });

                if (show) {
                    // Set selected episode as all
                    show.selectedEpisodes = seasonEpisodes;

                    // user.channel.set(showIndex, show);
                    user.save();
                } else {
                    // Add show to user's channel
                    user.channel.push({
                        show_id: dbShow._id,
                        selectedEpisodes: seasonEpisodes,
                    });

                    user.save();
                }
            } else {
                user.channel.pull({show_id: dbShow._id});
                user.save();
            }
        }
    }

    res.sendStatus(200);
});

export default router;