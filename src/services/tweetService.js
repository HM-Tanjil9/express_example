import { Filter } from "bad-words";
import { StatusCodes } from "http-status-codes";
import { createTweet as createTweetRepositories } from "../repositories/tweetRepositories.js";

export const createTweet = async ({body}) => {
    const filter = new Filter();
    if(filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message: "Tweet contains blocked words",
            status: StatusCodes.BAD_REQUEST
        }
    }

    const tweet = await createTweetRepositories({body});
    return tweet;
}