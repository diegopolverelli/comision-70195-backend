import { expect } from "chai"
import {describe, it} from "mocha"
import mongoose, { isValidObjectId } from "mongoose"
import userModel from "../src/dao/models/User.js"
import supertest from "supertest"  // supertest-session

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase10')
    console.log("DB Online!")
} catch (error) {
    console.log(`Error al conectar a DB`)
    process.exit()
}

const requester=supertest("http://localhost:8080")
let cookie
let mockUser={
    first_name:"Juan", last_name:"test", email:"test2025@test.com", password:"123"
}

describe("Test router sessions", function(){
    this.timeout(8000)

    describe("Test circuito registro / login / current", ()=>{
        // after o before, afterEach / beforeEach

        after(async()=>{
            await userModel.deleteMany({email: "test2025@test.com"})
        })

        it("La ruta /api/sessions/register, permite dar de alta un usuario", async()=>{

            let {status, body} = await requester.post("/api/sessions/register").send(mockUser)
            // console.log(status, body)

            // { status: 'success', payload: '67a3673d9c40de5643086883' }

            expect(status).to.be.eq(200)
            expect(body).to.has.property("payload")
            expect(body).to.has.property("status").and.is.eq("success")
            expect(isValidObjectId(body.payload)).to.be.true
        })

        it("La ruta /api/sessions/login, enviando un user previamente registrado, genera una cookie con un token", async()=>{
            // let mockUser={
            //     email:"test2025@test.com", password:"123"
            // }

            let { body, headers} = await requester.post("/api/sessions/login").send(mockUser)
            // console.log(body, headers)
            cookie=headers["set-cookie"][0]
            let nombreCookie=headers["set-cookie"][0].split("=")[0]   
            let contenidoCookie=headers["set-cookie"][0].split("=")[1]
            let token=contenidoCookie.split(";")[0]   
            // console.log({nombreCookie})
            // console.log({contenidoCookie})
            // console.log({token})

            expect(nombreCookie).to.be.eq("coderCookie")

        })

        it("La ruta /api/sessions/current, si recibe una cookie, retorna los datos del usuario del token", async()=>{
            let {body} = await requester.get("/api/sessions/current").set("Cookie", cookie)
            // console.log(body)
            expect(body.payload).to.have.property("email").and.to.be.eq(mockUser.email)
        })

    })

    describe("Test circuito... otros...", ()=>{
        it("nada... prueba", ()=>{
            expect(1).to.be.eq(1)
        })
    })

})
