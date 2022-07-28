import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db'
import { ProductController } from './src/controllers/api/ProductController'
import { Services } from './src/services/ProductServices'
import { Product } from './src/models/ProductModel'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const router = express.Router()
app.use('/api/products', router)

const services = Services(Product)
const controller = ProductController(services, router)


const PORT = process.env.PORT || 7000
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })