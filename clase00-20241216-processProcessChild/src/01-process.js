import fs from "fs"

console.log("pid:", process.pid)
console.log("cwd:", process.cwd())
console.log("platform:", process.platform)
console.log("version:", process.version)

// console.log("variables de entorno:", process.env)
console.log("variables de entorno:", process.env.PRUEBA_PORT)
console.log("variables de entorno:", process.env.PRUEBA_SECRET)

console.log("argumentos:", process.argv)


