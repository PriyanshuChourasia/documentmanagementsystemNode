import Mongoose from "mongoose";
import { env } from "./env.config";



async function connectDB(): Promise<void> {
    const url:string = env.DB_URL;
    try{
        Mongoose.connect(url)
    }catch(error:unknown){
        if(error instanceof Error){
            console.error("Database connection error",error.message);
        }else{
            console.error("An unknown error occurred",error);
        }
        process.exit(1);
    }

    const dbConnect = Mongoose.connection;

    dbConnect.on("connected",()=>{
        console.log("Mongoose connected to url",url);
    });


    dbConnect.on("error",(error:unknown)=>{
        console.log("Mongoose Connection error: ",error);
    });

    dbConnect.on("disconnected",()=>{
        console.log("Mongoose disconnected");
    });


    process.on('SIGINT',async ()=>{
        console.log("connection disconnected");
        await Mongoose.disconnect();
        process.exit(0);
    });
}





export {connectDB,Mongoose};