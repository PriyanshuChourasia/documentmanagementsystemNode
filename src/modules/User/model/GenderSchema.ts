import { Mongoose } from "../../../config/database";
import { IGenderSchemaInterface } from "../interface/GenderSchemaInterface";

const {Schema} = Mongoose;


const GenderSchema = new Schema<IGenderSchemaInterface>({
    name:{
        type:String
    }
},{
    timestamps:true
});


const GenderModel = Mongoose.model<IGenderSchemaInterface>("Genders",GenderSchema);

export default GenderModel;