import { ProductController } from "../controllers/api/ProductController";
import { IProduct, ProductServices } from "../Interfaces";
import {jest} from '@jest/globals'
import { Types } from "mongoose";
import  express from 'express'


const services:ProductServices = {
    getAllProducts: jest.fn<(par: void) => Promise<IProduct[]>>(),
    getProductByID: jest.fn<(id: any) => Promise<(IProduct & { _id: Types.ObjectId; }) | null>>(),
    createProduct: jest.fn<(par: IProduct) => Promise<void>>(),
    updateProduct: jest.fn<(id: any, par: IProduct) => Promise<void>>(),
    deleteProduct: jest.fn<(id: any) => Promise<(IProduct & {_id: Types.ObjectId;}) | null>>()
}

jest.mock('express')



const controller = ProductController(services, express.Router())