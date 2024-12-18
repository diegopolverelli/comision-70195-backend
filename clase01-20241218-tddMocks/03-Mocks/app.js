import {fakerES_MX as faker} from "@faker-js/faker"

console.log(faker.animal.dog())
console.log(faker.book.author())
console.log(faker.database.engine())
let nombre=faker.person.firstName("female")
let apellido=faker.person.lastName()
let email=faker.internet.email({firstName:nombre, lastName:apellido, })
let persona={
    nombre, apellido, email
}
console.log(persona)
console.log(faker.commerce.product())
console.log(faker.commerce.price({min:500, max:8000, symbol:"$"}))