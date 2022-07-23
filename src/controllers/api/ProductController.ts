import express from 'express'
import data from '../../../database/database.json'
import { Product, ProductNoID } from '../../models/Product'
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


const findByID = async (id: string): Promise<Product | undefined> => {
    return new Promise((resolve, reject) => {
        const product = data.products.find((par) => {
            return par.id === id
        })

        resolve(product)


    })
}


//@Get by ID
router.get('/:id', async (req, res) => {
    // const id = getRequestID(req)
    const product = await findByID(req.params.id)

    if (product) {
        res.status(200).json(product)
    } else {
        res.status(400).json(`There is no product with id: ${req.params.id}`)
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
        writeFileSync('./database/database.json', JSON.stringify(data))
        res.status(201).json(newProduct)
    } else {
        res.status(400).json('Enter a valid  product')
    }
})

//@Update product
router.put('/:id', async (req, res) => {
    const newProduct: ProductNoID = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    const oldProduct = await findByID(req.params.id)

    if (oldProduct) {
        const updProduct: Product = {
            id: oldProduct.id,
            name: newProduct.name || oldProduct.name,
            description: newProduct.description || oldProduct.description,
            price: newProduct.price || oldProduct.price
        }
        const updatedProducts = data.products.map((par) => {
            if (par.id === req.params.id) {
                return updProduct
            }
            return par
        })

        data.products = updatedProducts

        writeFileSync('./database/database.json', JSON.stringify(data))

        res.status(200).json(updProduct)
    } else {
        res.status(400).json(`There is no product with id: ${req.params.id}`)
    }
})

//@Delete product
router.delete('/:id', async (req, res) => {
    const delProduct = await findByID(req.params.id)

    if (delProduct) {
        const newProducts = data.products.filter((par) => {
            if (par.id !== req.params.id) {
                return par
            }
        })

        data.products = newProducts

        writeFileSync('./database/database.json', JSON.stringify(data))

        res.status(200).json()
    } else {
        res.status(400).json(`There is no product with id: ${req.params.id}`)
    }
})