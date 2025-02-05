import {expect} from "chai"
import {describe, it} from "mocha"
import supertest from "supertest"
import fs from "fs"

import mongoose, { isValidObjectId } from "mongoose"

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase10')
    console.log("DB Online!")
} catch (error) {
    console.log(`Error al conectar a DB`)
    process.exit()
}

const requester=supertest("http://localhost:8080")

describe("Pruebas funcionales sobre el router de /api/pets", function(){
    this.timeout(8000)
    
    after(async()=>{
        await mongoose.connection.collection("pets").deleteMany({specie:"test202502"})
    })

    // necesito before, beforeEach, o afterEach???

    it("La ruta /api/pets metodo get, retorna un array de mascotas", async()=>{
        let {status, body}=await requester.get("/api/pets")
        // console.log(resultado.body)
        expect(status).to.be.eq(200)
        expect(body.payload).to.be.ok
        expect(body.status).to.be.ok
        expect(body.status).to.be.eq("success")
        expect(body).to.has.property("payload")
        if(body.payload){
            expect(Array.isArray(body.payload)).to.be.true
        }
    })

    it("La ruta /api/pets método POST, graba una mascota en DB si envío los datos completos de la mascota", async()=>{
        let mockPet={
            name: "Roger", 
            specie: "test202502", 
            birthDate: new Date(2024, 2, 1).toUTCString()
        }
        let {status, body}=await requester.post("/api/pets").send(mockPet)

        // console.log(status)
        // console.log(body)
        expect(status).to.be.eq(200)
        expect(body).to.has.property("status")
        expect(body).to.has.property("payload")
        expect(body.payload).to.has.property("_id")
        expect(isValidObjectId(body.payload?._id)).to.be.true
        expect(body.payload).to.has.property("name").and.to.be.eq(mockPet.name)
    })

    it("La ruta /api/pets método POST, si envío datos incompletos, retorna un error", async()=>{
        let mockPet={
            specie: "test202502", 
            birthDate: new Date(2024, 2, 1).toUTCString()
        }
        let {status, body}=await requester.post("/api/pets").send(mockPet)
        // console.log(status)
        // console.log(body)

        // { status: 'error', error: 'Incomplete values' }
        expect(status).to.be.greaterThanOrEqual(400)
        expect(body).to.has.property("status").and.to.be.eq("error")
        expect(body).to.has.property("error").and.to.be.eq("Incomplete values")

    })

    it("La ruta /api/pets/withimage, metodo post, admite una imagen, y la sube al server", async()=>{
        let mockPet={
            name: "Roger", 
            specie: "test202502", 
            birthDate: new Date(2024, 2, 1).toUTCString()
        }

        let {status, body}=await requester.post("/api/pets/withimage")
            .field("name", mockPet.name)
            .field("specie", mockPet.specie)
            .field("birthDate", mockPet.birthDate)
            .attach("image","./img-roger.jpg")

        // console.log(body, status)    
        expect(body.payload).to.be.ok
        expect(body.payload).to.has.property("image")
        expect(fs.existsSync(body.payload.image)).to.be.true

        fs.unlinkSync(body.payload.image)

    })

})