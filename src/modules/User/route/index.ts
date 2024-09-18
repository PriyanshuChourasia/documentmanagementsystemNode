import express from "express";
import { validateRequest } from "../../../middlewares/ValidationMiddleware";
import { UserRegistrationSchema } from "../utils/schema/UserRegistrationSchema";
import { validateEmail } from "../../../middlewares/EmailValidator";
import UserController from "../controller/UserController";

const userRouter = express.Router();


/**
 * @openapi
 * /api/v1/user/:
 *  post:
 *      tags:
 *         - User
 *      summary: Register a user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                    $ref: '#/components/schemas/CreateUserInput'
 *      responses:
 *          201:
 *              description: User created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                        $ref: '#/components/schemas/CreatedUserResponse'
 *          400:
 *              description: Bad request
 */
userRouter.post('/', validateRequest(UserRegistrationSchema),validateEmail, UserController.save);


/**
 * @openapi
 * /api/v1/user/all:
 *  get:
 *      tags:
 *          - User
 *      summary: Get all users
 *      description: Retrive all database users
 *      responses:
 *          200:
 *              description: User retrived successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                        $ref: '#/components/schemas/GetAllUserResponse'
 *          400:
 *              description: Bad request
 *      
 */
userRouter.get('/all',UserController.index);











export {userRouter};