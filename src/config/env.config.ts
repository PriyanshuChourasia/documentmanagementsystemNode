import dotenv from "dotenv";
import {z} from "zod";

dotenv.config();

const envSchema = z.object({
    PORT: z.string().min(1).transform((val)=> parseInt(val,10)),
    DB_URL: z.string().url(),
    API_KEY: z.string().min(1).optional(),
    NODE_ENV: z.enum(['development','production','test']).optional()
});

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success)
{
    console.error("Invalid environment variables: ",parsedEnv.error.format());
    process.exit(1);
}

export const env = parsedEnv.data;