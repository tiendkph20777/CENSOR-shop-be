
import express from "express";
import productRouter from "./routes/products";
import mongoose from "mongoose";
const app = express();
import cors from "cors"


// đăng ký middleware" giải mã dữ liệu json
app.use(express.json());
app.use(cors())

// router
app.use("/api", productRouter);

mongoose.connect("mongodb://127.0.0.1:27017/CENSOR-SHOP");

export const viteNodeApp = app;