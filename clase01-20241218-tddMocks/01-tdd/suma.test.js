import { suma } from "./suma.js";
// import { styleText } from 'node:util';
import colors from "colors"

// console.log(styleText(["red", "underline", "bold"], "prueba de texto"))

let pruebas=0
let ok=0
let esperado
let resultado
console.time(`Demora en el proceso de test:`)

pruebas++
console.log(`Prueba ${pruebas}: si recibo como arg 2 numeros, la fn debe retornar la suma de ambos`)
resultado=suma(5, 10)
esperado=15
if(resultado===esperado){
    ok++
    console.log(`√`.green+` Prueba ${pruebas} superada...!!!\n` )
}else{
    console.log(`Prueba ${pruebas} ha fallado`.red+`\n`)
}


pruebas++
console.log(`Prueba ${pruebas}: si no recibo argumentos, debe retornar "error"`)
resultado=suma()
esperado="error"
if(resultado===esperado){
    ok++
    console.log(`√`.green+` Prueba ${pruebas} superada...!!!\n` )
}else{
    console.log(`Prueba ${pruebas} ha fallado`.red+`\n`)
}

pruebas++
console.log(`Prueba ${pruebas}: si recibo n args numéricos, debe retornar la suma de todos ellos`)
resultado=suma(10, 20, 4)
esperado=34
if(resultado===esperado){
    ok++
    console.log(`√`.green+` Prueba ${pruebas} superada...!!!\n` )
}else{
    console.log(`Prueba ${pruebas} ha fallado`.red+`\n`)
}


pruebas++
console.log(`Prueba ${pruebas}: si recibo algun arg no numéricos, debe retornar "error 2"`)
resultado=suma(10, "Juan", 4)
esperado="error 2"
if(resultado===esperado){
    ok++
    console.log(`√`.green+` Prueba ${pruebas} superada...!!!\n` )
}else{
    console.log(`Prueba ${pruebas} ha fallado`.red+`\n`)
}





console.log(`\n\n\nTest finalizado!`)
console.log(`Pruebas realizadas: ${pruebas}. Pruebas correctas: `+`${ok}`.green+`. Pruebas incorrectas: `+`${pruebas-ok}`.red )
console.timeEnd(`Demora en el proceso de test:`)
