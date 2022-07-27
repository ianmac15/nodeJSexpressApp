import { IProduct, ProductServices } from '../../Interfaces'
import  { Router } from 'express'



export const ProductController = (services: ProductServices, router: Router) => {
    


    //@Get All
    router.get('/', async (req, res) => {
        const products = await services.getAllProducts()
        if (products) {
            res.status(200).json(products)
        } else {
            res.status(404).json('There are no products')
        }

    })

    //@Get by ID
    router.get('/:id', async (req, res) => {

        
        const product = await services.getProductByID(req.params.id)

        if (product) {
            res.status(200).json(product)
        } else {
            res.status(400).json(`There is no product with id: ${req.params.id}`)
        }
    })

    //@Create product
    router.post('/', async (req, res) => {

        const newProduct: IProduct = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            inStock: req.body.inStock,
            image: req.body.image
        }
        
        if (newProduct.category && newProduct.name && newProduct.price) {
           
            const product = await services.createProduct(newProduct)
            res.status(201).json(product)
        } else {
            res.status(400).json('Enter a valid  product')
        }
    })

    //@Update product
    router.put('/:id', async (req, res) => {
        const newProduct: IProduct = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            inStock: req.body.inStock,
            image: req.body.image
        }

        
        const oldProduct = await services.getProductByID(req.params.id)

        if (oldProduct) {
            const updProduct: IProduct = {
                name: newProduct.name || oldProduct.name,
                category: newProduct.category || oldProduct.category,
                price: newProduct.price || oldProduct.price,
                inStock: newProduct.inStock || oldProduct.inStock,
                image: newProduct.image || oldProduct.image
            }

            
            const product = await services.updateProduct(req.params.id, updProduct)

            

            res.status(200).json(product)
        } else {
            res.status(400).json(`There is no product with id: ${req.params.id}`)
        }
    })

    //@Delete product
    router.delete('/:id', async (req, res) => {
       
        const delProduct = await services.deleteProduct(req.params.id)

        if (delProduct) {
            

            res.status(200).json({ id: req.params.id })
        } else {
            res.status(400).json(`There is no product with id: ${req.params.id}`)
        }
    })
}

