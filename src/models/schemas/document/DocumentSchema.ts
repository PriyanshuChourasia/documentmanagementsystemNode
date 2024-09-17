import { DocumentInterface } from "models/interfaces/document/DocumentInterface";
import { Mongoose } from "../../../config/database";


const {Schema} = Mongoose;

const DocumentSchema = new Schema<DocumentInterface>({

});






export default DocumentSchema;