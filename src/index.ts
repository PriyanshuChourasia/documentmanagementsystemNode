import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { env } from "./config/env.config";
import { appRouter } from "./routes";
import { connectDB } from "./config/database";
import swaggerDoc from "./utils/apiDoc/SwaggerApiDoc";
import apiLogger from "@/utils/logs/index";
import morgan from "morgan";


const app = express();

const port = env.PORT;

app.use(cors({
    credentials:true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));

const server = http.createServer(app);

/**
 * apis logging format winston and morgan
 */
const morganApiFormat = ':method :url :status :response-time ms';

app.use(morgan(morganApiFormat,{
    stream:{
        write:(message)=>{
            const logObject ={
                method: message.split(' ')[0],
                url: message.split(' ')[1],
                status: message.split(' ')[2],
                responseTime: message.split(' ')[3],
            };
            apiLogger.info(JSON.stringify(logObject));
        }
    }
}));



app.use('/api/v1',appRouter);


/**
 * Running Swaggwer Api Documentation
 */
swaggerDoc(app);


/**
 * starting Mongoose connection
 */
connectDB();




server.listen(port,()=>{
    console.log(`https://priyanshu.co.in/api/v1/auth running`);
})