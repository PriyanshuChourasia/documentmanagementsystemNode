import { validateEmail } from "@/middlewares/EmailValidator";
import { validateRequest } from "@/middlewares/ValidationMiddleware";
import { UserRegistrationSchema } from "@/utils/schemas/UserSchema";
import express from "express";
import UserController from "@modules/User/controller/UserController";
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


/**
 * @openapi
 * /api/v1/user/:id:
 *  get:
 *      tags:
 *          - User
 *      summary: Get user by id
 *      description: Retrive user by id
 *      responses:
 *          200:
 *              description: User by id retrived successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                        $ref: '#/components/schemas/GetUserById'
 *          400:
 *              description: Bad request
 */
userRouter.get('/:id',);











export {userRouter};