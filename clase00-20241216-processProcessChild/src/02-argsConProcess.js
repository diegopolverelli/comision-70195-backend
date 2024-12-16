
let [pathNode, pathScript, ...argumentos]=process.argv  // los ... son aquí el operador rest 

// console.log(argumentos)
let indicePort=argumentos.findIndex(a=>a=="--port")
if(indicePort==-1){
    console.log(`Parametro port es requerido`)
    process.exit()
}

console.log(`Servidor correrá en puerdo ${argumentos[indicePort+1]}`)