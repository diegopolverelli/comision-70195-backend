import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import { userModel } from "../dao/models/users.model.js"
import { generaHash } from "../utils.js"

export const iniciarPassport=()=>{

    // paso 1
    passport.use("registro", 
        new local.Strategy(
            {
                passReqToCallback: true, 
                usernameField: "email", 
            },
            async(req, username, password, done)=>{
                try {
                    let {nombre}=req.body
                    if(!nombre){
                        console.log(`falta nombre!`)
                        return done(null, false)
                    }

                    let existe=await userModel.findOne({email:username}).lean()
                    if(existe){
                        console.log(`usuario repetido!`)
                        return done(null, false)
                    }

                    // resto validaciones pertinentes... password larga y con carac. especiales... etc.
                    // email válido, nombre válido

                    password=generaHash(password)

                    let newUser=await userModel.create({name:nombre, email:username, password})
                    return done(null, newUser)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    // paso 1bis / 1' solo si uso sessions
    // passport.serializeUser
}