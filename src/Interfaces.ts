import { Types } from "mongoose"

export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string
            PORT: number
            MONGO_URI: string
        }
    }
}

export interface IProduct {
    name: string
    category: string
    price: number
    inStock: boolean
    image: string
}


export interface ProductServices {
    getAllProducts:(par: void) => Promise<IProduct[]>
    getProductByID: (id: any) => Promise<(IProduct & { _id: Types.ObjectId; }) | null>
    createProduct: (par: IProduct) => Promise<void>
    updateProduct: (id: any, par: IProduct) => Promise<void>
    deleteProduct: (id: any) => Promise<(IProduct & {_id: Types.ObjectId;}) | null>
}