import { CustomComparePasswordInteface } from "@modules/User/interface/RequestInterface";
import bcrypt from "bcryptjs";







export async function comparePassword(request:CustomComparePasswordInteface): Promise<boolean>{
    let passwordCheck:boolean = false;
    bcrypt.compare(request.requestedPassword,request.userPassword, (error,data)=>{
        if(error)
        {
            throw new Error("Error occurred while checking password");
        }

        if(data){
            passwordCheck = true;
            return;
        }else{
            passwordCheck = false;
            return;
        }
    });
    return passwordCheck;
}