import dotenv from 'dotenv';

dotenv.config(); // Load env variable from .env file

export const PORT = process.env.PORT || 3000; // Define a PORT variable
export const MONGO_URL = process.env.MONGODB_URL