import bycrypt from "bcryptjs";



export async function passwordEncrypt(password:string){
    const passwordHash = await bycrypt.hash(password,10);
    return passwordHash;
}