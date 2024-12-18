import {fakerES_MX as faker} from "@faker-js/faker"

export const generaCliente=()=>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let dni=faker.number.int({min:9_500_000, max: 50_000_000})
    let email=faker.internet.email({firstName:nombre, lastName:apellido})

    return {
        nombre, 
        apellido, 
        dni,
        email
    }

} 

// console.log(generaCliente())

export const generaProducto=()=>{
    let producto=faker.commerce.product()
    let precio=faker.number.float({fractionDigits:2, min: 1800, max: 12300})
    let cantidad= faker.number.int({min:1, max:50})
    // id=faker.string.uuid()
    let id=faker.database.mongodbObjectId()

    return {
        producto,
        precio,
        cantidad, 
        id
    }

}

// console.log(generaProducto())

export const generaTicket=()=>{
    let total=0
    let nroComp="000"+faker.string.numeric({length:2, allowLeadingZeros:true})+"-000"+faker.string.numeric({length:5, allowLeadingZeros:true})
    let fecha=faker.date.recent({days: 10})
    let cliente=generaCliente()
    let carrito=[]
    for(let i=0; i<faker.number.int({min:1, max: 10});i++){
        let producto=generaProducto()
        carrito.push(producto)
        total+=producto.precio
    }

    return {
        nroComp, 
        fecha,
        cliente, 
        carrito, 
        total
    }
}

console.log(generaTicket())