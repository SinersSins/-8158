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
