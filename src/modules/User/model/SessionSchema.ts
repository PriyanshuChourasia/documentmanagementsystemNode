import { Mongoose } from "@/config/database";
import { ISessionSchemaInterface } from "../interface/SessionSchemaInterface";


const {Schema} = Mongoose;


const SessionSchema = new Schema<ISessionSchemaInterface>({
    userId:{
        type: Schema.Types.ObjectId,
        ref:"Users"
    },
    access_token:{
        type: String,
    },
    refresh_token:{
        type: String
    },
    valid:{
        type: Boolean
    }
},
{
    optimisticConcurrency:true,
    minimize:true,
    timestamps:true
});


const SessionModel = Mongoose.model<ISessionSchemaInterface>("Sessions",SessionSchema);


export default SessionModel;