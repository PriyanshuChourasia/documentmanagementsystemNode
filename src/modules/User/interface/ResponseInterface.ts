import { UUID } from "crypto";

export interface IUserResponseInterface{
    _id:UUID;
    name:string;
    email:string
}