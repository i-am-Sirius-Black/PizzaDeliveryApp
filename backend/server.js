import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';

dotenv.config();


const app = express();

// Middleware
app.use(cors()); // Use cors middleware to allow all origins
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api', inventoryRoutes);
app.use('/api', userRoutes);

// Error handler middleware
app.use(errorHandler);

// Database connection
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
