import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Successfully connected to mongodb");
        

    } catch(error) {
        console.log("Failed to connect mongodb");
        console.log(error);
        
    }
}