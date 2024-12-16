import dotenv from "dotenv"
import { Command, Option } from "commander"

const prog=new Command()

prog.addOption(new Option("-m, --mode <mode>", "Modo de ejecución del server").choices(["dev", "prod"]).default("prod"))

prog.parse()
const {mode}=prog.opts()

// let mode="prod"
dotenv.config({
    path:mode=="prod"?"./src/.env.prod":"./src/.env.dev",
    override:true
})

export const config={
    PORT:process.env.PORT, 
    SECRET:process.env.SECRET
}