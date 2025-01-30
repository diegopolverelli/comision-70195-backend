import express, { Request, Response } from 'express';
import mongoose from "mongoose"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req:Request,res:Response)=>{

    let {error}=req.query
    if(error){
        res.setHeader('Content-Type','application/json');
        res.status(400).json({error:`error`})
        return 
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
