import UserModel from "../../models/schemas/user/UserSchema";
import {z} from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *      CreateUserInput:
 *          type: object
 *          required:
 *              - name
 *              - email
 *              - password
 *          properties:
 *              name:
 *                  type: string
 *                  default: Priyanshu
 *              email:
 *                  type: string
 *                  default: priyanshuchourasia916@gmail.com
 *              password:
 *                  type: string
 *                  deafult: strongPassword123
 *      CreatedUserResponse:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *              name:
 *                  type: string
 *              email:
 *                  type: string
 *              createdAt:
 *                  type: string
 *              updatedAt:
 *                  type: string
 *      GetAllUserResponse:
 *          type: object
 *          properties:
 *              data:
 *                  type: object
 *                  properties:
 *                      result:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/AllUser'
 * 
 * 
 * 
 * 
 *      AllUser:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *                  default: user id
 *              name:
 *                  type: string
 *                  default: Name
 *              email:
 *                  type: string
 *                  default: Email
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *              updateAt:
 *                  type: string
 *                  format: date-time
 *              
 */

export const UserRegistrationSchema = z.object({
    name: z.string().min(1,{message:"Name is required"}),
    email: z.string().min(1,{message:"Email is required"})
            .refine((value)=> value.length > 0,{message:"Not a valid mail"})
            .refine((value)=> value.length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),{
                message:"Email is not valid"
            }), 
    password: z.string().min(8,{message:"Password should be of minimum 8 characters"})
});