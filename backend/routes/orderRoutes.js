import express from 'express';
import {
  getOrder,
  updateOrderStatus,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// router.post('/order', protect, createOrder);
router.get('/getOrder/:id', protect, getOrder);
router.put('/updateOrderStatus/:id', protect, updateOrderStatus);

export default router;
