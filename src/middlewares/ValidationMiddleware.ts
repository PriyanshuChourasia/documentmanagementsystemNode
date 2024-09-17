import {Request,Response,NextFunction} from "express";
import {z,ZodError} from "zod";
import { StatusCodes } from "http-status-codes";


export function validateRequest(schema: z.ZodObject<any,any>){
    return(req:Request,res:Response,next:NextFunction) =>{
        try{
            schema.parse(req.body);
            next();
        }catch(error:unknown){
            if(error instanceof ZodError){
                const errorMessages = error.errors.map((issue:any)=>({
                    message: `${issue.message}`,
                }));
                res.status(StatusCodes.BAD_REQUEST).json({
                    error:errorMessages,
                    success:false
                })
            }else{
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    error:'Internal server error',
                    success:false
                })
            }
        }
    }
}