import swaggerAutogen from "swagger-autogen";
import {Express} from "express";
import SwaggerUI from "swagger-ui-express";
import path from "path";
import fs from "fs";

const doc = {
    info:{
        title:"Document API",
        description:"Description"
    },
    host:'localhost::8082',
    schemes:['http']
};



const outputFile = './swagger-output.json';
const routes= ['./src/modules/User/route/index.ts'];
swaggerAutogen({openapi:'3.0.0'})(outputFile,routes,doc);



function swaggerAutoGenDoc(app:Express){
    const swaggerFilePath = path.resolve(__dirname,'./swagger-output.json');

    if(fs.existsSync(swaggerFilePath))
    {
        const swaggerDocument = require(swaggerFilePath);
        app.use('/api/v1/api-docs',SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
    }
    else{
        console.warn("Swagger output file not found. Generate swager-output.json first");
    }
}



export default swaggerAutoGenDoc;