import { ProductsDAO } from "../dao/ProductDao.js";
import { procesaErrores } from "../utils.js";

export class ProductsController{
    static async getProducts(req, res){
        let productos=await ProductsDAO.get()

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productos});
    }

    static async createProduct(req, res){
        let {code, descrip, price, stock}=req.body
        if(!code || !descrip){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`code y descrip son requeridos!`})
        }

        if(!price) price=0
        if(!stock) stock=0

        try {
            let newProduct=await ProductsDAO.save({code, descrip, price, stock})
            res.setHeader('Content-Type','application/json');
            return res.status(201).json({payload:newProduct, message:`Producto creado correctamente!`});
        } catch (error) {
            procesaErrores(error, res)
        }

    }
}