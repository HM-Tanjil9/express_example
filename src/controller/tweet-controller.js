import { StatusCodes } from "http-status-codes"
import { createTweet as createTweetService } from "../services/tweetService.js"

export const getTweets = (req, res) => {
    return res.json({
        message: "Welcome to tweet route"
    })
}

export const getTweetById = (req, res) => {
    return res.json({
        message: "Welcome to tweet route",
        id: req.params.id
    })
}

export const createTweet = async (req, res) => {
    try {
        const response = await createTweetService({
            body: req.body.tweet
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Tweet created successfully",
            data: response
        })
    } catch(error) {
        if(error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false
            })
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal server error",
            success: false
        })
    }
    
}