process.on("message", msg=>{
    console.log(`Soy el proceso con pid ${process.pid}, y recibí este mensaje: "${msg}"`)
    let result = 0

    console.log(`Comienza proceso`)
    console.time(`Demora del proceso: `)

    for (let i = 0; i < 900_000_000; i++) {
    // for (let i = 0; i < 100; i++) {
        result += Math.random() * 10
    }

    result = result.toFixed(0)
    console.timeEnd(`Demora del proceso: `)

    // return result
    process.send({type:"resultado", result})
})