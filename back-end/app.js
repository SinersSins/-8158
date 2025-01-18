const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db'); // Import database configuration
const authRoutes = require('./routes/authRoutes'); // Import authentication routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
