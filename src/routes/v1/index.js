import express from 'express';
import { InfoController } from '../../controller/index.js';
import tweet from './tweet.js';

const router = express.Router();

router.get('/info', InfoController);
router.use('/tweets', tweet);

export default router;