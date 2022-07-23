import express from 'express'
import data from '../../../database/database.json'
import { Product } from '../../models/Product'
import { v4 } from 'uuid'
import { writeFileSync } from 'fs'

export const router = express.Router()

//@Get All
router.get('/', (req, res) => {
    if (data.products) {
        res.status(200).json(data.products)
    } else {
        res.status(404).json('There are no products')
    }

})

//@Get by ID
router.get('/:id', (req, res) => {
    // const id = getRequestID(req)
    const id = req.params.id
    const product = data.products.find((par) => {
        return par.id === id
    })

    if (product) {
        res.status(200).json(product)
    } else {
        res.status(400).json(`There is no product with id: ${id}`)
    }
})

//@Create product
router.post('/', (req, res) => {

    const newProduct: Product = {
        id: v4(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }
    // if (req.body) {
    //     newProduct = { id: v4(), ...req.body }
    // }
    


    if (newProduct.description && newProduct.name && newProduct.price) {
        data.products.push(newProduct)
        // writeFileSync('../../../database/database.json', data)
        res.status(200).json(newProduct)
    } else {
        res.status(400).json('Enter a valid  product')
    }
})