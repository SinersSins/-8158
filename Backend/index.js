/** @format */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const PORT = 3000;
import userProfilerouter from "./routes/userProfile.route.js";
app.use(cors());
app.use(express.json());
app.use("/userProfile", userProfilerouter);
app.listen(PORT, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/snackandsteer");
    console.log("server is running");
  } catch {
    console.error("Error");
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
