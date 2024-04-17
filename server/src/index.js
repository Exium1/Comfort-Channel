import 'dotenv/config'
import express from 'express';
import cors from 'cors';

import { router } from './routes/router.js';
import { authMiddleware } from './middleware/auth.js';

import connect from './database/connect.js';

connect();

const app = express();
const port = 3000;

app.use(cors());
app.use(authMiddleware);
app.use('/', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

/*

1. User searches for shows through /search/show?query=...&platform=...
- 

*/