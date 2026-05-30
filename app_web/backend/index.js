import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoute from './route/user_route.js';
import analyzeRoute from "./route/analyze.js";


const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

connectDB();

// Routes
app.use('/api/users/', userRoute);
app.use("/api", analyzeRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});