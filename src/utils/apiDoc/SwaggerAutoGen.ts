import swaggerAutogen from "swagger-autogen";
import {Express} from "express";
import SwaggerUI from "swagger-ui-express";
import path from "path";
import fs from "fs";
import { APIS } from "./SwaggerApisRoutes";
import { env } from "../../config/env.config";


const doc = {
    info:{
        version:"1.0.0",
        title:"Document Management System",
        description:"API Documentation of Document management system"
    },
    host:"localhost::8082/api/v1/",
    schemes:['http','https'],
    servers:[
        {
            url:`http://localhost::${env.PORT}/api/v1`,
            description:"Local server url"
        },
        {
            url:'https://priyanshu.co.in/api/v1',
            description:"Secure DMS server"
        }
    ],
    components:{
        securitySchemas:{
            bearerAuth:{
                type:'http',
                scheme:"bearer"
            }
        }
    },
    securityDefinitions:{
        apiKeyAuth:{
            type:"apikey",
            in:"header",
            name:"X-TOKEN-API",
            description:"Api authorization key"
        }
    }

}



const outputFile = 'src/utils/apiDoc/swagger-output.json';
const routes= APIS;
swaggerAutogen({openapi:'3.0.0'})(outputFile,routes,doc);



function swaggerAutoGenDoc(app:Express){
    const swaggerFilePath = path.resolve(__dirname,'./swagger-output.json');

    if(fs.existsSync(swaggerFilePath))
    {
        const swaggerDocument = require(swaggerFilePath);
        app.use('/api/v1/api-docs',SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
        console.log("https://priyanshu.co.in/api/v1/api-docs");
    }
    else{
        console.warn("Swagger output file not found. Generate swager-output.json first");
    }
}



export default swaggerAutoGenDoc;