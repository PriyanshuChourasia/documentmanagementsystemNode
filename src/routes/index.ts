import express from "express";
import { userRouter } from "../modules/User/route";
const appRouter = express.Router();



appRouter.use('/user',userRouter);


export {appRouter};