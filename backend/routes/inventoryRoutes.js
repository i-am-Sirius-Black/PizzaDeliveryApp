

import express from 'express';
import {
  getInventory,
  updateInventory,
  addInventoryItem,
  deleteInventoryItem,
} from '../controllers/inventoryController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/inventory', protect, getInventory);
router.put('/inventory', protect, admin, updateInventory);
router.post('/inventory', protect, admin, addInventoryItem);
router.delete('/inventory/:id', protect, admin, deleteInventoryItem);

export default router;


