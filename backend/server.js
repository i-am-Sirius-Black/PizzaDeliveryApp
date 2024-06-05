import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import Razorpay from 'razorpay'
import cors from 'cors';

dotenv.config();

const app = express();


//import routes
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import userRoutes from './routes/userRoutes.js'
import pizzaRoutes from './routes/pizzaRoutes.js';
import verifyRoutes from './routes/verifyRoutes.js';

// Middleware
app.use(cors()); // Use cors middleware to allow all origins
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Route to create a Razorpay order
app.post('/api/order', async (req, res) => {
  const { amount } = req.body;
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    });
    res.json({ orderId: order.id });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).send('Error creating order');
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', orderRoutes);
app.use('/api', inventoryRoutes);
app.use('/api', userRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api', verifyRoutes);

// Error handler middleware
app.use(errorHandler);

// Database connection
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
