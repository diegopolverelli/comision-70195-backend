import express from 'express';
import { heroes } from './data/heroes';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/heroes", (req, res)=>{

    let resultado=heroes
    resultado.push({
        id: 21,
        name: 'Gamora',
        alias: '-',
        team: 'Guardianes',
        publisher: 'Marcel',
        // skinColor: "green"

    })

    res.setHeader('Content-Type','application/json');
    res.status(200).json({resultado});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}...!!!`);
    console.log(`Pruebas con TypeScript...`)
});
