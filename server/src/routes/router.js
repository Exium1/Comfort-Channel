import express from 'express';
import { searchRoutes } from './search.js';

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/search', searchRoutes)

export { router }