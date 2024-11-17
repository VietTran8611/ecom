import express from 'express'

import { createProduct, deleteProduct, getProduct, updateProduct,getProductByIds } from '../controllers/product.controller.js';


const router = express.Router();


router.get("/",getProduct)

router.get("/:id",getProductByIds)

router.post("/",createProduct)

router.delete("/:id", deleteProduct)

router.put("/:id", updateProduct)

export default router