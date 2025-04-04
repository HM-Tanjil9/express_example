import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true, // Remove white space from the beginning and end of the string
        maxLength: 280 
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema); //tweet collection

export default Tweet;