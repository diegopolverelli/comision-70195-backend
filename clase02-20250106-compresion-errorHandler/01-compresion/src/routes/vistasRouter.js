import { Router } from 'express';
export const router=Router()

router.get('/heroes',(req,res)=>{


    res.status(200).render("prueba")
})