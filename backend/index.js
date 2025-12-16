import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/floransDB")


app.use("/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
