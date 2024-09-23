import { env } from "@/config/env.config";
import jwt from "jsonwebtoken";



export interface IJWTinterface{
    userId:string;
    email:string
}




export async function createJwtToken(to:IJWTinterface):Promise<string>{
    try{
        const token = jwt.sign(
            { id: to.userId, email: to.email },
            "Priyashu",
            {
                expiresIn: "1h"
            }
        );
        return token;
    }catch(error:unknown)
    {
        console.log(error);
        throw new Error("Token not created");
    }
}