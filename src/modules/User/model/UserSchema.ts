import { Mongoose } from "../../../config/database";
import { IUserModel, IUserSchemaInterface } from "../interface/UserSchemaInterface";

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
    minimize:true,
    statics:{
        findEmailExists(email:string){
            return this.findOne({email})
        }
    }
});


const UserModel = Mongoose.model<IUserSchemaInterface,IUserModel>("Users",UserSchema);


export default UserModel;