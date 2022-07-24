import { Product } from "../models/Product"
import data from '../../database/database.json'

export const findByID = async (id: string): Promise<Product | undefined> => {
    return new Promise((resolve, reject) => {
        const product = data.products.find((par) => {
            return par.id === id
        })

        resolve(product)


    })
}

export const getAll = ():Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        resolve(data.products)
    })
}