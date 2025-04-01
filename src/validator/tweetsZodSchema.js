import { z } from "zod";


export const tweetsZodSchema = z.object({
    tweet: z.string().min(1).max(280)
});