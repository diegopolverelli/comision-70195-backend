import Users from "../../src/dao/Users.dao.js";
// import Assert from "assert"
import {expect} from "chai"
import {describe, it} from "mocha"

import mongoose from "mongoose";

try {
    await mongoose.connect("mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase09",
        //  {dbName:"clase09"}
        )
        console.log(`DB online!`)
} catch (error) {
    console.log(`Error al conectar a DB`)
    process.exit()
}

// const assert=Assert.strict
const UsersDAO=new Users()

describe("Pruebas al DAO de Users usando Chai", function(){
    this.timeout(10000)

    // before(async()=>{
    // })
    
    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    it("El DAO debe devolver un array de usuarios para su método get()", async()=>{
        let resultado=await UsersDAO.get()

        // assert.equal(Array.isArray(resultado), true)
        expect(Array.isArray(resultado)).to.be.equal(true)
        expect(Array.isArray(resultado)).to.be.true
        if(Array.isArray(resultado) && resultado.length>0){
            // assert.ok(resultado[0]._id)
            expect(resultado[0]._id).to.exist
            expect(resultado[0]).to.have.property("_id")
            // assert.ok(resultado[0].email)
            expect(resultado[0].email).to.exist
        }
        // assert.equal(10, 10)
    })

    it("El DAO debe generar un usuario en DB si corremos el método save, enviando un usuario válido", async()=>{
        let mockUser={
            first_name:"Juan", 
            last_name:"Test", 
            email:"test@test.com", 
            password:"123"
        }
        let resultado=await UsersDAO.save(mockUser)

        // assert.ok(resultado._id)
        expect(resultado._id).to.be.ok
        expect(resultado).to.has.property("_id")
        // assert.ok(resultado.email)
        expect(resultado).to.has.property("email").and.to.be.equal(mockUser.email)
        // assert.equal(resultado.email, mockUser.email)
        expect(resultado.email).to.be.eq(mockUser.email)

        // assert.equal(10, 10)
        resultado=await mongoose.connection.collection("users").findOne({email: mockUser.email})
        // console.log(resultado)
        // console.log(typeof resultado)
        // assert.notEqual(resultado, null)
        expect(resultado).not.to.be.null
    })

    // it()
})

