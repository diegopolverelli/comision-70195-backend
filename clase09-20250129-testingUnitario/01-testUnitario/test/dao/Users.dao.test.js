import Users from "../../src/dao/Users.dao.js";
import Assert from "assert"
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

const assert=Assert.strict
const UsersDAO=new Users()

describe("Pruebas al DAO de Users", function(){
    this.timeout(10000)

    // before(async()=>{
    // })
    
    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    it("El DAO debe devolver un array de usuarios para su método get()", async()=>{
        let resultado=await UsersDAO.get()

        assert.equal(Array.isArray(resultado), true)
        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0]._id)
            assert.ok(resultado[0].email)
        }
        // assert.equal(10, 10)
    })

    it("El DAO debe generar un usuario en DB si corremos el método save, enviando un usuario válido", async()=>{
        let mockUser={
            first_name:"Juan", last_name:"Test", email:"test@test.com", password:"123"
        }
        let resultado=await UsersDAO.save(mockUser)

        assert.ok(resultado._id)
        assert.ok(resultado.email)
        assert.equal(resultado.email, mockUser.email)
        // assert.equal(10, 10)
    })

    // it()
})

