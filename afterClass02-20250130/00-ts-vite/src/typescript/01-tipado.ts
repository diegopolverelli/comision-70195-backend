export const tipado=`Tipado de datos`

// let nombre:string="Carlitos"
let nombre:string | undefined | number

nombre=undefined
console.log(nombre)


// nombre=false
nombre=104

console.log(nombre)

type stringNumber=string | number
 
let valor:stringNumber
valor=100
console.log(valor)

valor="prueba"
valor=90

// valor=["a"]

const prueba=async()=>{
    return 100
}

valor=await prueba()

interface interfacePersona{
    nombre:string
    email:string
    edad?:number
    saludo:(a:string)=>string
}

let persona01:interfacePersona

persona01={
    nombre:"", 
    email:"prueba@test.com",
    // altura:184,
    edad:24,
    saludo:(textoSaludo:string)=>{
        return textoSaludo + "...!!!"
    }
}
console.log(persona01.saludo("Buenas tardes"))

type persona={
    name:string
    email:string
}

let persona02:persona

persona02={
    name:"Juan", email:"juan@test.com"
}
console.log(persona02.email)

class Persona implements interfacePersona {
    nombre: string=""
    email: string=""
    edad?: number | undefined

    constructor(){}

    saludo(a: string){
        return `Hola ${a}`
    } 

}

let persona03=new Persona()
console.log(persona03)

class Heroe{
    identidad
    nombre

    constructor(nombre:string, identidad:string){
        this.nombre=nombre
        this.identidad=identidad
    }
}

let heroe01=new Heroe("Batman", "Bruce Wayne")
console.log(heroe01)


// app.get("/prueba", (req:any, res)=>{

//     return res.status(200).send({message:"hola"})
// })

let apellido:any
apellido=10

apellido=true
apellido="Lopez"
apellido=[1,2,3]
