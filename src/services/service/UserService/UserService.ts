import { UserRepository } from "../../../repositories/repository/UserRepository/UserRepository";

export class UserService{
    constructor(private readonly userRepo:UserRepository){}

    async registerUser(req:Request){

    }

}