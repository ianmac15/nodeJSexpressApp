import { Product } from "../models/Product"
import { writeFileSync } from "fs"

export const findByID = async (id: string, products:Product[] ): Promise<Product | undefined> => {
    return new Promise((resolve, reject) => {
        const product = products.find((par) => {
            return par.id === id
        })

        resolve(product)


    })
}

export const getAll = (products:Product[]):Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export const saveData = (data: any, products:Product[], newProducts: Product[]):Promise<void> => {
    return new Promise((resolve, reject) => {
        products = newProducts
        writeFileSync('./database.json', JSON.stringify(data))
        resolve()
    })
    
}