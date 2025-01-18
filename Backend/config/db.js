const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/auth_system')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports = mongoose;
