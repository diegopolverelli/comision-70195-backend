import { Router } from 'express';
import cluster from "cluster"
export const router=Router()



router.get('/op1',(req,res)=>{

    console.time("Demora operación:")
    let valor1=Math.floor(Math.random()*(100)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)    
    let valor2=Math.floor(Math.random()*(100)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)    
    let resultado=valor1+valor2

    console.log(valor1, valor2, resultado, `Op1 - Ejecutado por nodo con pid ${process.pid} - Worker: ${cluster.worker.id}`)
    console.timeEnd("Demora operación:")

    res.setHeader('Content-Type','application/json')
    res.status(200).json({resultado})
})

let contador=0
router.get('/op2',(req,res)=>{

    console.time("Demora operación:")
    contador++
    let resultado=0
    for(let i=0;i<500_000_000;i++){
        let valor1=Math.floor(Math.random()*(100)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)    
        resultado+=valor1
    }

    console.log(contador, resultado, `Op2 - Ejecutado por nodo con pid ${process.pid} - Worker: ${cluster.worker.id}`)
    console.timeEnd("Demora operación:")

    res.setHeader('Content-Type','application/json')
    res.status(200).json({resultado, consultasRuta: contador})
})