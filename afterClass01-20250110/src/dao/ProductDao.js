import { productsModel } from "./models/products.model.js";

export class ProductsDAO{
    static async get(){
        return await productsModel.find().lean()
    }

    static async save(producto={}){
        let newProduct=await productsModel.create(producto)
        return newProduct.toJSON()
    }
}