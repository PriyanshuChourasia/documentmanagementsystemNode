import {createLogger, format,transports} from "winston";



/**
 * custom format for console logging with colors
 */

const customLogFormat = format.combine(
    format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
    format.json(),
    format.colorize(),
    format.printf(({message,timestamp})=>{
        return `message= ${message} :  time: ${timestamp}`;
    }),
);



/**
 * creating a custom *winston* logger
 */

const apiLogger = createLogger({
    level:'info',
    format: format.combine(
        format.json(),
        format.colorize(),customLogFormat
    ),
    transports:[
        new transports.File({filename:'./src/utils/logs/app.log'}),
        new transports.Console({
            format:customLogFormat
        })
    ]
});



export default apiLogger;

