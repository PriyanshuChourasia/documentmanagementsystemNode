import { Document, Types } from "mongoose";



export interface ISessionSchemaInterface extends Document{
    userId: Types.ObjectId;
    access_token: string;
    refresh_token: string;
    valid:boolean
}