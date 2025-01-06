import express from 'express';
import handlebars from 'express-handlebars'
import zlib from "zlib"
import compress from "express-compression"

import { router as vistasRouter } from './routes/vistasRouter.js';
import compression from 'express-compression';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(compression({}))
app.use(compression({brotli:{enabled:true}}))
app.use(express.static("./src/public"))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.use("/", vistasRouter)


app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/texto1',(req,res)=>{

    console.time(`Tiempo de proceso...`)
    let texto=`Texto muy muy muuuuuuuuuuuy largo`.repeat(100_000)
    // let textoComprimido=zlib.gzipSync(texto, {})
    // let textoComprimido=zlib.deflateSync(texto, {})
    let textoComprimido=zlib.brotliCompressSync(texto)
    
    console.timeEnd(`Tiempo de proceso...`)
    res.setHeader('Content-Type','text/plain');
    // res.setHeader('Content-Encoding','gzip');
    // res.setHeader('Content-Encoding','deflate');
    res.setHeader('Content-Encoding','br');
    res.status(200).send(textoComprimido);
})

app.get('/texto2',(req,res)=>{

    console.time(`Tiempo de proceso...`)
    let texto=`Texto muy muy muuuuuuuuuuuy largo`.repeat(100_000)

    
    console.timeEnd(`Tiempo de proceso...`)

    res.status(200).send(texto);
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
