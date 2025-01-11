import mongoose from "mongoose"
export const productsModel=mongoose.model(
    "product", 
    new mongoose.Schema(
        {
            code: {type: String, unique: true},
            descrip: String,
            price: Number, 
            stock: Number
        },
        {
            timestamps: true, 
            // strict: true,
            // collection: "productos2022"
        }
    )
)