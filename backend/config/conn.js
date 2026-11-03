const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error('MONGODB_URI is not defined. Add it to your .env file.');
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 5000,
  });

  console.log('DB connected successfully...');
};

module.exports = connectDB;