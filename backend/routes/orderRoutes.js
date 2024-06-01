import express from 'express';
import {
  createOrder,
  getOrder,
  updateOrderStatus,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/order', protect, createOrder);
router.get('/order/:id', protect, getOrder);
router.put('/order/:id', protect, updateOrderStatus);

export default router;
