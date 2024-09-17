import { Request, Response } from "express";
import UserModel from "../../../models/schemas/user/UserSchema";

export class UserRepository{

    private readonly user = UserModel;

    async registerUser(req:Request){
        const {name,email,password} = req.body;
        return this.user.create({
            name:name,
            email:email,
            password:password
        });
    }

}