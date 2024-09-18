import { Request, Response } from "express";
import UserModel from "../model/UserSchema";
import {StatusCodes} from "http-status-codes";


class UserController{

    async index(req:Request,res:Response){
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
            password:password
        });

        return res.status(StatusCodes.CREATED).json({
            data:user,
            status:true
        });
    }

}




export default new UserController();