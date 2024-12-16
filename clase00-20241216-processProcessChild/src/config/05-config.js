import dotenv from "dotenv"

const mode="dev"

dotenv.config({
    path: mode=="prod"?"./src/.env.prod":"./src/.env.dev",
    override: true
})

export const config={
    PORT:process.env.PORT, 
    SECRET:process.env.SECRET
}