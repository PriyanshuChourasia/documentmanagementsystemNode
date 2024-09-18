import { env } from "../../config/env.config";
import swaggerJSDoc from "swagger-jsdoc";
import { Express,Response,Request } from "express";
// import {version} from "../../../package.json";
import swaggerUi from "swagger-ui-express";
import { APIS } from "./SwaggerApisRoutes";



const options:swaggerJSDoc.Options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Document Management System",
            version:'1.0.0',
            description:"A Document management apis to manage documents online and share it with your known ones and can have access anytime to it",
            termsOfService:`http://localhost:${env.PORT}/terms`,
            contact:{
                name:"Api Support",
                email:"priyanshuchourasia916@gmail.com",
                url:`http://localhost:${env.PORT}/support`
            }
        },
        servers:[
            {
                url:`https://localhost:${env.PORT}`,
                description:"DMS Development server"
            },
            {
                url:`https://priyanshu.co.in`,
                description:"DMS Secure server"
            }
        ],
        components:{
            securitySchemas:{
                bearerAuth:{
                    type:"https",
                    scheme:"bearer",
                    bearerFormat:"JWT"
                },
            },
        },
        security:[
            {
                bearerAuth:[]
            }
        ]
    },
    apis:APIS
}


const swaggerSpec = swaggerJSDoc(options);



function swaggerDoc(app:Express){
    /** swagger ui page */
    app.use('/api/v1/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

    app.get("/api/v1/docs.json",(res:Response)=>{
        res.setHeader('Content-Type','application/json')
        res.send(swaggerSpec);
    });

    /**
     * Swagger UI available at this url to check apis
     */
    console.log(`https://priyanshu.co.in/api/v1/api-docs`);

    /**
     * Swagger JSON available at this url
     */
    console.log(`https://priyanshu.co.in/api/v1/docs.json`);

}



export default swaggerDoc;