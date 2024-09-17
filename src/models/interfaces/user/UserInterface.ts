import { Document, Model } from "mongoose";



export enum Gender{
    m="male",
    f="female",
    o="others"
}


export interface IUserInterface extends Document{
    name:string;
    username:string;
    gender:Gender;
    email:string;
    password:string;
}


export interface IUserModel extends Model<IUserInterface>{
    findEmailExists(email:string): Promise<IUserInterface | null>;
}