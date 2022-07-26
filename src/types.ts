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

export interface ProductNoID {
    name: string
    description: string
    price: number
}