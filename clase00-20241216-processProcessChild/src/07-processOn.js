
process.on("exit", code=>{
    // código... instrucciones pertinentes
    console.log(`Programa finalizando... code: ${code}`)
})

process.on("uncaughtException", (error, type)=>{
    // código... instrucciones pertinentes

    console.log(`Error: ${error.message}`)
    console.log(`Tipo de error: ${type}`)
    // log del error
    // op. de cierre de sistema
    process.exit()
})

let contador=1

let i01=setInterval(() => {
    console.log(`Proceso ${contador}`)
    contador++
    if(contador>8){
        clearInterval(i01)
    }
}, 1000);

setTimeout(() => {
    throw new Error("Error indefinido...")
}, 5000);

// setTimeout(() => {
//     process.exit(-8)
// }, 3000);