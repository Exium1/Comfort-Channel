import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('/channel');
});

/* 
    Update a channel's show, season, or episode
*/
router.get('/update', (req, res) => {
    res.send('Updating channel');

    const platform = req.query.platform;
    const showID = req.query.showID;
    const seasonID = req.query.seasonID;
    const episodeID = req.query.episodeID;
    const selected = req.query.selected;

    // Check if the required parameters are provided
    if (!platform) {
        res.send("You need to provide a platform");
        return;
    }

    if (!showID) {
        res.send("You need to provide a showID");
        return;
    }

    if(episodeID) {
        // update episode
    } else {
        if(seasonID) {
            // update season
        } else {
            // update show
        }
    }
});

export default router;