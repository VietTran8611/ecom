import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js'
import productRoutes from "./routes/product.route.js";
import authRoutes from './routes/auth.route.js'
import orderRoutes from './routes/order.route.js'
import path from 'path';

import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT ||  5000
const __dirname = path.resolve()

app.use(express.json())
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(cookieParser())

app.use("/api/products", productRoutes);
app.use("/api/auth",authRoutes)
app.use("/api/order",orderRoutes)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server start at PORT ${PORT}`)
})

  