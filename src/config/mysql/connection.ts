import { IConnectionParameter } from "./interface/ConnectionParameter";
import { env } from "../env.config";
import {Sequelize,} from "sequelize";

class MySqlConnect{

    public databaseName:string = env.MYSQL_DB_NAME;
    protected username:string = env.DB_USERNAME;
    protected password:string = env.DB_PASSWORD;
    protected hostName:string = env.HOST_NAME ?? 'localhost';

    public constructor()
    {
        this.databaseName;
        this.username;
        this.password;
    }    


    protected sequalize:Sequelize =  new Sequelize(this.databaseName,this.username,"",{
        host: this.hostName,
        dialect: 'mysql'
    });

    async dbConnect(){
        try{
            await this.sequalize.authenticate(); 
            console.log("MySql Connection has been established");
        }catch(error:any){
            console.error(error.original.sqlMessage,"Error");
        }
    }
    
}



export const mysqlConnection = new MySqlConnect();
