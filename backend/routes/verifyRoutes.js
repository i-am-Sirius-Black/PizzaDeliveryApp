import express from 'express';
import { createOrderId, verifyPayment } from '../utils/paymentGateway.js';

const router = express.Router();

router.post('/verify', verifyPayment);
router.post('/order', createOrderId);


export default router;

