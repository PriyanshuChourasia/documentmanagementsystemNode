import { Request, Response } from "express";
import UserModel from "@modules/User/model/UserSchema";
import {StatusCodes} from "http-status-codes";
import { passwordEncrypt } from "../utils/bycrypt/passwordBycrypt";
import { createJwtToken } from "../utils/jwtToken/createToken";
import { comparePassword } from "../utils/bycrypt/comparePassword";


class UserController{

    
    async index(req:Request,res:Response){
        /**
         * #swagger.tags=['User']
         * #swagger.summary='Get All Users'
         * #swagger.description='This is mongodb api and used to get all users'
         */
        const header = req.headers.accept;
        console.log(header,'header accept');
        const userAll = await UserModel.find({});
        return res.status(StatusCodes.OK).json({
            data:{
                result:userAll
            },
            status:true
        });
    }

    async save(req:Request,res:Response){

        console.log(req,'request user');


        /**
         * #swagger.tags=['User']
         * #swagger.summary='Register user'
         * #swagger.description='This api is used to save user in database'
         */

         /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/CreateUserInput"
                    },
                }
            }
        } 
        */

        /*  #swagger.responses[200] = {
                description: 'User response after',
                content: {
                    "application/json":{
                        schema: {
                            $ref: '#/components/schemas/CreateUserResponse'
                        }
                    }
                }
            }
        */
        const {name,email,password} = req.body;

        const user = await UserModel.create({
            name:name,
            email:email,
            password: await passwordEncrypt(password),
            token: await createJwtToken(email)
        });

        return res.status(StatusCodes.CREATED).json({
            data:user,
            status:true
        });
    }

    async login(req:Request,res:Response){
        /**
         * #swagger.tags=['User']
         * #swagger.summary='User login api'
         * #swagger.description='TThi api is used to get authentication token to access all routes'
         */
        const {email,password} = req.body;
        const userExists = await UserModel.findEmailExists(email);
        if(userExists)
        {
            const passwordComp = await comparePassword({userPassword:userExists.password,requestedPassword:password});
            if(passwordComp)
            {
                res.status(StatusCodes.OK).json({
                    data:userExists,
                    status:true
                });
            }
            else if(!passwordComp)
            {
                res.status(StatusCodes.OK).json({
                    error:"Check your password",
                    status:false
                })
            }
        }else if(!userExists){
            res.status(StatusCodes.BAD_REQUEST).json({
                error:"User not found",
                status: false
            })
        }
    }

}




export default new UserController();