import express from 'express';
import { generaTicket } from './mocks.js';
import { modeloDatos } from './models/datos.model.js';
import mongoose from 'mongoose';
import { config } from './config/config.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/generatickets", async(req, res)=>{
    let {cantidad=1, db}=req.query

    let tickets=[]
    for(let i=0; i<cantidad; i++){
        tickets.push(generaTicket())
    }

    if(db){
        try {
            tickets=await modeloDatos.insertMany(tickets)
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error al generar tickets... :(`})
        }
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({tickets});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect(config.MONGO_URL, {dbName: config.DB_NAME})
    console.log(`DB online!`)
} catch (error) {
    console.log(`Error al conectar a DB: ${error.message}`)
}