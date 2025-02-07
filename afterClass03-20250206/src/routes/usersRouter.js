import { Router } from 'express';
import { User } from '../model/usersModel.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let usuarios=await User.findAll()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({usuarios})
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
    }
})

router.post("/", async(req, res)=>{
    let {firstName, lastName} = req.body
    if(!firstName || !lastName){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete todos los datos!`})
    }

    // validaciones pertinentes... 

    try {
        let nuevoUsuario=await User.create({firstName, lastName})   

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})        
    }

})