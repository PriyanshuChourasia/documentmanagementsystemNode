import { Model } from "mongoose";
import { Document } from "mongoose";
import { CustomComparePasswordInteface } from "./RequestInterface";

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
    token:string | null
}


export interface IUserModel extends Model<IUserSchemaInterface>{
    findEmailExists(email:string): Promise<IUserSchemaInterface | null>;
    checkUserPassword(request:CustomComparePasswordInteface):Promise<boolean | null>
}