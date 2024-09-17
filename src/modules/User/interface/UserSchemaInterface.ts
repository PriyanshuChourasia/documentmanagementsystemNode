import { Document } from "mongoose";

export enum Gender{
    m="male",
    f="female",
    o="others"
}


export interface IUserSchemaInterface extends Document{
    name:string;
    username:string;
    gender:Gender;
    email:string;
    password:string;
}