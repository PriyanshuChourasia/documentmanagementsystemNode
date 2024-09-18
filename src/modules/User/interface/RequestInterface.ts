import { Request } from "express";





export interface RegisterUserRequest extends Request{
    name:string;
    email:string;
    password:string;
}
