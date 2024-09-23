import { Request, Response } from "express";
import UserModel from "@modules/User/model/UserSchema";
import {StatusCodes} from "http-status-codes";
import { passwordEncrypt } from "../utils/bycrypt/passwordBycrypt";
import { createJwtToken } from "../utils/jwtToken/createToken";
import { CustomLoginInterface } from "../interface/RequestInterface";


class UserController{

    async index(req:Request,res:Response){
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
        const {email,password} = req.body;
        
    }

}




export default new UserController();