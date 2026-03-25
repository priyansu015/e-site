// Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// ✅ IMPORT ROUTES (ADD HERE)
const productRoutes = require("./routes/productRoutes");

// Sample Route
app.get("/", (req, res) => {
    res.send("🚀 API Running");
});

// ✅ USE ROUTES (ADD HERE)
app.use("/api/products", productRoutes);

// Server Port
const PORT = 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT}`);
});