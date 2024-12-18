// export const suma=(a, b)=>{
//     if(!a && !b) return "error"
//     return a+b
// }

// export const suma=(...sumandos)=>{   // ... son aquí operador rest
//     if(sumandos.length==0) return "error"

//     let error=false
//     sumandos.forEach(e=>{
//         if(typeof e!="number"){
//             error=true
//         }
//     })
//     if(error){
//         return "error 2"
//     }

//     let resultado=0
//     sumandos.forEach(n=>{
//         resultado+=n
//     })

//     return resultado
// }

// export const suma=(...sumandos)=>{   // ... son aquí operador rest
//     if(sumandos.length==0) return "error"

//     let error=false
//     let resultado=0
//     sumandos.forEach(e=>{
//         if(typeof e!="number"){
//             error=true
//         }else{
//             resultado+=e
//         }
//     })
//     if(error){
//         return "error 2"
//     }

//     return resultado
// }

export const suma=(...sumandos)=>{   // ... son aquí operador rest
    if(sumandos.length==0) return "error"
    if(sumandos.some(e=>typeof e!="number")) return "error 2"
    return sumandos.reduce((acum, valor)=>acum+=valor, 0)
}