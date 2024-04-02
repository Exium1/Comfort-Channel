import 'dotenv/config'
import express from 'express';

import { router } from './routes/router.js';
import { authMiddleware } from './middleware/auth.js';

const app = express();
const port = 3000;

app.use(authMiddleware);
app.use('/', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

