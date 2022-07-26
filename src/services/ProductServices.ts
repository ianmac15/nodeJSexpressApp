import { Product } from "../models/ProductModel"


export const Services = async (databaseModel: any) => {

    const getAll =  await databaseModel.find()
    const getById = await databaseModel.findById()
    

}