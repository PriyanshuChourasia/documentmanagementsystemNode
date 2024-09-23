import { CustomTokenRequest, CustomTokenResponse } from "@modules/User/interface/RequestInterface";
import SessionModel from "@modules/User/model/SessionSchema";
import { StatusCodes } from "http-status-codes";



class SessionController{

    async store(req:CustomTokenRequest,res:CustomTokenResponse){
        const {access_token,refresh_token,userId} = req;

        const session = await SessionModel.create({
            userId:userId,
            access_token:access_token,
            refresh_token:refresh_token,
        });

        res.send(StatusCodes.CREATED).json({
            access_token: access_token,
            refresh_token: refresh_token
        })
    }

}




export default new SessionController();