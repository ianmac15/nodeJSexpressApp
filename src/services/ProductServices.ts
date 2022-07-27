import { Model } from "mongoose"
import { IProduct, ProductServices } from "../Interfaces"


export const Services = (databaseModel: Model<IProduct>): ProductServices => {

    const getAllProducts = async () => { return await databaseModel.find()}
    const getProductByID = async(id: any) => {return await databaseModel.findById(id)}
    const createProduct = async(par: IProduct) => { await databaseModel.create(par)}
    const updateProduct = async(id: any, par: IProduct) => { await databaseModel.findByIdAndUpdate(id, par)}
    const deleteProduct = async(id: any) => { return await databaseModel.findByIdAndDelete(id)}
    
    return {getAllProducts, getProductByID, createProduct, updateProduct, deleteProduct}

}