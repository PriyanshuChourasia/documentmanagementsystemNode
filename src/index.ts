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