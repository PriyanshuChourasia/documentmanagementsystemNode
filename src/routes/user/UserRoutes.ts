import express from "express";
import UserController from "../../controllers/userController/UserController";
import { validateRequest } from "../../middlewares/ValidationMiddleware";
import { UserRegistrationSchema } from "../../utils/schemas/UserSchema";
import { validateEmail } from "../../middlewares/EmailValidator";

const userRoutes = express.Router();


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
userRoutes.post('/', validateRequest(UserRegistrationSchema),validateEmail, UserController.registerUser);


// userRoutes.get('/:id',)


/**
 * @openapi
 * /api/v1/user/all:
 *  get:
 *      tags:
 *          - User
 *      summary: Get all users
 *      description: Retrive all registered users
 *      responses:
 *          200:
 *              description: Successfully retrieved all users
 *              content:
 *                  application/json:
 *                          schema:
 *                            $ref: '#/components/schemas/GetAllUserResponse'
 *          400:
 *              description: Bad Request
 */
userRoutes.get('/all',UserController.getAllUser);



export {userRoutes};