import Product from '../models/products.model.js'
import mongoose from 'mongoose'

export const getProduct = async(req,res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json({success: true, data: products})
    }catch(err){
        console.log("Error in get product:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const getProductByIds = async(req,res)=>{
    const {id} = req.params
    try{
        const products = await Product.findById(id)
        res.status(200).json({success: true, data: products})
    }catch(err){
        console.log("Error in get product:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const createProduct = async (req,res)=>{
    const product = req.body
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message:"Please provide all fields"})
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save()
        res.status(201).json({success: true, data: newProduct})
    }catch(err){
        console.log("Error in create product:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return  res.status(404).json({success: false, message:"Invalid Id"})
    }

    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "product deleted"})
    }catch(err){
        console.log("Error in delete product:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const updateProduct = async(req,res)=>{
    const {id}= req.params
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
      return  res.status(404).json({success: false, message:"Invalid Id"})
    }


    try{
       const updaetdProduct = await Product.findByIdAndUpdate(id,product,{new:true})
       res.status(200).json({success:true,data: updaetdProduct})
    }catch(err){
        res.status(500).json({success: false, message:"Server Error"})
    }
}