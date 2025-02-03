import { createHash } from "../../src/utils/index.js";
import {expect} from "chai"
import {describe, it} from "mocha"

describe("Pruebas funciones auxiliares", ()=>{
    // after()
    // before()
    // afterEach()
    // beforeEach()

    it("Si envío un texto plano la funcion createHash retorna un código en formato bcrypt", async()=>{
        let password="CoderCoder123"
        let resultado=await createHash(password)

        expect(resultado).not.to.be.eq(password)
        expect(resultado.length).to.be.greaterThan(10)

        // $2b$
        // console.log(resultado.slice(0, 5)) 
        expect(resultado.slice(0, 4)).to.be.eq("$2b$")  
    })
})