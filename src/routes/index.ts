import express from "express";
import { authRoutes } from "./auth/AuthenticationRoutes";
import { userRoutes } from "./user/UserRoutes";
const appRouter = express.Router();

appRouter.use('/auth',authRoutes);


appRouter.use('/user',userRoutes);


export {appRouter};