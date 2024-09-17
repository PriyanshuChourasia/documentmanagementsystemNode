import { Gender, IUserInterface, IUserModel } from "../../interfaces/user/UserInterface";
import { Mongoose } from "../../../config/database";


const {Schema} = Mongoose;


const UserSchema = new Schema<IUserInterface>({
    name:{
        type:String,
    },
    username:{
        type:String,
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
    },
    gender:{
        type:String,
        enum: Object.values(Gender),
    },
},{
    timestamps:true,
    optimisticConcurrency:true,
    minimize:true,
    statics:{
        findEmailExists(email:string){
            return this.findOne({email})
        }
    }
});


const UserModel = Mongoose.model<IUserInterface,IUserModel>("Users",UserSchema);


export default UserModel;


