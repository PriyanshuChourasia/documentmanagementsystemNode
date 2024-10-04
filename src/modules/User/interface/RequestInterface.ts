import { Request, Response } from "express";
import { Types } from "mongoose";





export interface RegisterUserRequest extends Request{
    name:string;
    email:string;
    password:string;
}




export interface CustomTokenRequest{
    userId: Types.ObjectId;
    access_token: string;
    refresh_token: string;
}


export interface CustomTokenResponse extends Response{
    access_token:string;
    refresh_token:string;
}



export interface CustomComparePasswordInteface{
    requestedPassword:string;
    userPassword:string;
}




export interface CustomLoginInterface extends Request{
    email: string;
    password:string;
}