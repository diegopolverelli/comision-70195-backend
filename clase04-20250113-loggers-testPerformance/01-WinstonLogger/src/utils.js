import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const logger=winston.createLogger(
    {
        transports: [
            new winston.transports.Console(
                {
                    level: "debug",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                }
            ),
            new winston.transports.File(
                {
                    filename: "./src/logs/error.log",
                    level: "warn",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json()
                    )
                }
            )
        ]
    }
)

logger.log("silly", "prueba log nivel silly")
logger.silly("prueba log nivel silly")
logger.log("verbose", "prueba log nivel verbose")
logger.verbose("prueba log nivel verbose")


const loggerPersonalizado=winston.createLogger(
    {
        levels: {grave: 0, error: 1, alerta: 2, debug:3},
        transports: [
            new winston.transports.Console({
                level: "alerta",
                format: winston.format.combine(
                    winston.format.timestamp(), 
                    winston.format.colorize({
                        colors: {grave: "red", error: "red", alerta: "yellow", debug: "blue"}
                    }),
                    winston.format.simple()
                )
            })
        ]

    }
)

loggerPersonalizado.alerta(`Prueba log nivel personalizado alerta...!!!`)
loggerPersonalizado.log("alerta",`Prueba log nivel personalizado alerta...!!!`)
loggerPersonalizado.grave(`Prueba log nivel personalizado critico...!!!`)


export const middLogger=(req, res, next)=>{
    req.logger=logger

    next()
}