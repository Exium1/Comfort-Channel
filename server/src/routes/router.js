import express from 'express';
import { searchRoutes } from './search.js';
import channelRoutes from './channel.js';

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/search', searchRoutes)
router.use('/channel', channelRoutes)

export { router }