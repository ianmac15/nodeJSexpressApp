import express, { urlencoded } from 'express'
import path from 'path'
import { getRequestID } from './middleare/getReqeustData'
import { logger } from './middleare/logger'
import { router } from './src/controllers/api/ProductController'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db'

dotenv.config()

connectDB()


// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })





//init middleware
// app.use(logger)

//Set static folder
// app.use(express.static(path.join(__dirname,'public')))

// app.use('/api/products', router)

// //@Get All
// app.get('/api/products', (req, res) => {
//     if (data.products) {
//         res.status(200).json(data.products)
//     } else {
//         res.status(404).json('There are no products')
//     }
    
// })

// //@Get by ID
// app.get('/api/products/:id', (req, res) => {
//     // const id = getRequestID(req)
//     const id = req.params.id
//     const product = data.products.find((par)=>{
//         return par.id === id
//     })

//     if (product) {
//         res.status(200).json(product)
//     } else {
//         res.status(400).json(`There is no product with id: ${id}`)
//     }
    
// })


const PORT = process.env.PORT || 7000
app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})