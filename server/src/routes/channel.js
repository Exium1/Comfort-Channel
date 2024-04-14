import express from 'express';
import axios from 'axios';
import userModel from '../database/models/user.js';
import showModel from '../database/models/show.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('/channel');
});

/* 
    Update a channel's show, season, or episode
*/
router.post('/update', async (req, res) => {
    res.send('Updating channel');

    const platform = req.query.platform;
    const showID = req.query.showID;
    const seasonID = req.query.seasonID;
    const episodeID = req.query.episodeID;
    const select = req.query.select === "true" ? true : false;
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
    
    for (let [userShow, userShowIndex] of user.channel.entries()) {
        if (userShow.show_id == dbShow._id) {
            show = userShow;
            showIndex = userShowIndex;
        }
    }

    if (!show && !select) { res.status(200); return;}

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
                user.channel[showIndex].selectedEpisodes.pull({seasonID: seasonID});
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
            }
        }
    }
});

export default router;