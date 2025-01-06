import { config } from "../config/config.js";


export const errorHandler=(error, req, res, next)=>{
    let detalle=undefined
    if(config.MODE=="development"){
        detalle=error.message
        console.log(error)
    } 

    if(error.custom){
        console.log(error.cause)
        res.setHeader('Content-Type','application/json');
        return res.status(typeof error.code=="number"?error.code:500).json({error:`Ocurrió un error!`, detalle})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Ocurrió un error!`, detalle})
    }
}