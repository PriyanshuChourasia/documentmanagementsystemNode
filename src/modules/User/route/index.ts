import { validateEmail } from "@/middlewares/EmailValidator";
import { validateRequest } from "@/middlewares/ValidationMiddleware";
import { UserRegistrationSchema } from "@modules/User/utils/schema/UserRegistrationSchema";
import express from "express";
import UserController from "@modules/User/controller/UserController";
const userRouter = express.Router();



userRouter.post('/', validateRequest(UserRegistrationSchema),validateEmail, UserController.save);

userRouter.get('/all',UserController.index);

userRouter.post('/authenticate',UserController.login)

userRouter.get('/:id',);











export {userRouter};