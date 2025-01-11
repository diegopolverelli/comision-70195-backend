import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import { iniciarPassport } from './config/passport.config.js';

import { router as productsRouter } from './routes/productsRouter.js';
import { router as sessionsRouter } from './routes/sessionsRouter.js';
import { config } from './config/config.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// paso 2
iniciarPassport()
app.use(passport.initialize())
// app.use(passport.session())  // solo si usamos sessions
 
app.use("/api/products", productsRouter)
app.use("/api/sessions", sessionsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

mongoose.connect(
    config.MONGO_URL,
    {
        dbName:config.DB_NAME,
    }
).then(()=>{
    console.log("DB online!")
}).catch(e=>{
    console.log(`Error: ${e.message}`)
})
