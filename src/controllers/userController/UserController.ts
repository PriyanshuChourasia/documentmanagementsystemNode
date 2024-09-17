import { Request, Response } from "express";
import {StatusCodes} from "http-status-codes";
import UserModel from "../../models/schemas/user/UserSchema";




class UserController{

    async registerUser(req:Request,res:Response){
        const {name,email,password} = req.body;

        const user = await UserModel.create({
            name:name,
            email:email,
            password:password
        });

        return res.status(StatusCodes.CREATED).json({
            data:user,
            status:true
        })
    }


    getAllUser(req:Request, res:Response){

        return res.status(StatusCodes.OK).json({
            data:{
                name:"Priyanshu",
                email:"priyanshuchourasia916@gmail.com"
            },
            status:true
        })
    }


    // async getUserById(req){

    // }
}




export default new UserController();