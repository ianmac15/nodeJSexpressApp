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
    id: string
    name: string
    description: string
    price: number
}

export interface ProductNoID {
    name: string
    description: string
    price: number
}