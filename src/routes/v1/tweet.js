import express from 'express';
import { createTweet, getTweetById, getTweets } from '../../controller/index.js';
import { tweetsZodSchema } from '../../validator/tweetsZodSchema.js';
import { validate } from '../../validator/zodValidator.js';

const router = express.Router();

router.get('/', getTweets);
router.get('/:id', getTweetById);
router.post('/', validate(tweetsZodSchema), createTweet)

export default router;