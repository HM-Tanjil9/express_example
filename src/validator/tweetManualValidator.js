import { StatusCodes } from "http-status-codes";

export const tweetManualValidator = (req, res, next) => {
    if(!req.body.tweet) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "Tweet is required"
        })
    }
    if(req.body.tweet.length >= 280) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "Tweet must be 280 characters or less."
        })
    }
    next();
}