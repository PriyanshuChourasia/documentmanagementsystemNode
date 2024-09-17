import { Mongoose } from "../../../config/database";
import { IUserSchemaInterface } from "../interface/UserSchemaInterface";

const {Schema} = Mongoose;

const UserSchema = new Schema<IUserSchemaInterface>({
    name:{
        type:String
    },
    username:{
        type: String,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type: String,
    },
    gender:{
        type:String
    }
},{
    optimisticConcurrency:true,
    timestamps:true,
    minimize:true
});


const UserModel = Mongoose.model<IUserSchemaInterface>("Users",UserSchema);


export default UserModel;