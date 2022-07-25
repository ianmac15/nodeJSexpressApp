import { IProduct } from "../types"
import { writeFileSync } from "fs"

export const findByID = async (id: string, products:IProduct[] ): Promise<IProduct | undefined> => {
    return new Promise((resolve, reject) => {
        const product = products.find((par) => {
            return par.id === id
        })

        resolve(product)


    })
}

export const getAll = (products:IProduct[]):Promise<IProduct[]> => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export const saveData = (data: any, products:IProduct[], newProducts: IProduct[]):Promise<void> => {
    return new Promise((resolve, reject) => {
        products = newProducts
        writeFileSync('./database.json', JSON.stringify(data))
        resolve()
    })
    
}