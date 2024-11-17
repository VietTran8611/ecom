import Order from '../models/orders.model.js'
import mongoose from 'mongoose'

export const getOrder = async(req,res)=>{
    const {id} = req.params
    try{
        const products = await Order.find({buyer: id})
        res.status(200).json({success: true, data: products})
    }catch(err){
        console.log("Error in get product:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const createOrder = async (req,res)=>{
    const product = req.body
    if(!product.name || !product.price || !product.image || !product.quantity || !product.buyer || !product.productId){
        return res.status(400).json({success: false, message:"Please provide all fields"})
    }

    const newProduct = new Order(product)

    try{
        await newProduct.save()
        res.status(201).json({success: true, data: newProduct})
    }catch(err){
        console.log("Error in create product:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const deleteOrder = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return  res.status(404).json({success: false, message:"Invalid Id"})
    }

    try{
        await Order.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "product deleted"})
    }catch(err){
        console.log("Error in delete product:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}
