/** @format */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const PORT = process.env.PORT ||3000;
import userProfilerouter from "./routes/userProfile.route.js";
import userRouter from "./routes/authRoutes.js";
app.use(cors());
app.use(express.json());
app.use("/userProfile", userProfilerouter);
app.use('/auth', userRouter);
app.listen(PORT, async () => {
  try {
    await mongoose.connect("mongodb+srv://ddhruv8824:BrSnEqkjXY5IGgUA@cluster0.n4jf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("server is running");
  } catch (error){
    console.error(error,"Error");
  }
});

//////////////////////////////////
// kranthi's app.js

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('./config/db'); // Import database configuration
// const authRoutes = require('./routes/authRoutes'); // Import authentication routes

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);

// module.exports = app;



// const dotenv = require('dotenv');
// const app = require('./app');

// dotenv.config();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
