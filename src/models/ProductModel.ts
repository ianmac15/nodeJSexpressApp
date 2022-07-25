import {Schema, model, connect} from "mongoose";
import { runInContext } from "vm";
import { IProduct } from "../types";

const productSchema = new Schema<IProduct>({
    name:{type: String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true}
})

export const Product = model<IProduct>('Product', productSchema);
