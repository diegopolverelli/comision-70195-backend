import { Router } from 'express';
import passport from 'passport';
import { UserDTO } from '../DTO/UserDTO.js';
export const router=Router()

// paso 3
router.post('/register', passport.authenticate("registro", {session:false}), (req,res)=>{


    // si el authenticate sale OK, passport deja una propiedad
    // user en la request.... req.user
    let usuario=new UserDTO(req.user)

    res.setHeader('Content-Type','application/json')
    res.status(201).json({
        status:`Usuario creado!`, 
        newUser: usuario
    })
})