import { IConnectionParameter } from "./interface/ConnectionParameter";
import { env } from "../env.config";

class MySqlConnect{

    public databaseName:string;
    protected username:string;
    protected password:string;

    public constructor(databaseInfo:IConnectionParameter)
    {
        this.databaseName = databaseInfo.databaseName;
        this.username = databaseInfo.username;
        this.password = databaseInfo.username;
    }
}