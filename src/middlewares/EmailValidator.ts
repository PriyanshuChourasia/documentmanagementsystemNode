import{Request,Response,NextFunction} from "express";
import UserModel from "../modules/User/model/UserSchema";
import {StatusCodes} from "http-status-codes";



export async function validateEmail(req:Request,res:Response,next:NextFunction){
   
        try{
            const {email} = req.body;
            const userExists = await UserModel.findEmailExists(email);
            if(!userExists)
                {
                    next();
                } else{
                    res.status(StatusCodes.BAD_REQUEST).json({
                        error:"Email already exists",
                        status:false
                    });
                }
        }catch(error:unknown){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error:"Internal Server Error    ",
                status:false
            });
        }
}