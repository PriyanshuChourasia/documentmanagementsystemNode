import { env } from "@/config/env.config";
import jwt from "jsonwebtoken";



export interface IJWTinterface{
    userId:string;
    email:string;
    time:string;
}




export async function createJwtToken(jwtToken:IJWTinterface):Promise<string>{
    try{
        const token = jwt.sign(
            { id: jwtToken.userId, email: jwtToken.email },
            "Priyashu",
            {
                expiresIn: jwtToken.time
            }
        );
        return token;
    }catch(error:unknown)
    {
        console.log(error);
        throw new Error("Token not created");
    }
}