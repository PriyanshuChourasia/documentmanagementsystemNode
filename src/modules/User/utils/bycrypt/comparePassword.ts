import { CustomComparePasswordInteface } from "@modules/User/interface/RequestInterface";
import bcrypt from "bcryptjs";







export async function comparePassword(request:CustomComparePasswordInteface): Promise<boolean>{
    try{
        const passwordCheck =  bcrypt.compare(request.requestedPassword,request.userPassword);
        console.log(passwordCheck);
        return passwordCheck;
    }catch(error:unknown){
        throw new Error("Password Error: ");
    }
}