import express from 'express';
import {
  getAllOrders,
  getOrder,
  updateOrderStatus,
} from '../controllers/orderController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// router.post('/order', protect, createOrder);
router.get('/getOrder/:id', protect, getOrder);
router.get('/getAllOrders', protect, admin, getAllOrders);
router.put('/updateOrderStatus/:id', protect, updateOrderStatus);

export default router;
