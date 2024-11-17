import express from 'express'


import { createOrder, deleteOrder, getOrder } from '../controllers/order.controller.js';
const router = express.Router();



router.get("/:id",getOrder)

router.post("/",createOrder)

router.delete("/:id", deleteOrder)


export default router