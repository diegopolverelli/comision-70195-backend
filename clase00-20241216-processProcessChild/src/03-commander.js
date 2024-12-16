import {Command, Option} from "commander"

const programa=new Command()

programa.option("-p, --port <port>", "Puerto donde escuchará el servidor")
programa.option("-d, --debug", "Activa modo debug")
programa.option("-c, --colores [colores...]", "Permite indicar colores...")
programa.requiredOption("-u, --user <usuario>", "Usuario que ejecuta el script")
programa.addOption(new Option("-m, --mode <mode>", "Modo de ejecución del script").choices(["dev", "prod"]).default("prod"))

programa.allowUnknownOption()
programa.parse()
const opts=programa.opts()
console.log(opts)
console.log(programa.args)

if(opts.mode==="dev"){
    console.log(`Ejecutando en modo desarrollo`)
}