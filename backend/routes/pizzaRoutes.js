// routes/pizzaRoutes.js

import express from 'express';
import { getPizzas, addPizza, updatePizza, deletePizza } from '../controllers/pizzaController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.get('/', protect, getPizzas);
router.post('/', protect, admin, addPizza);
router.put('/:id', protect, admin, updatePizza);
router.delete('/:id', protect, admin, deletePizza);

export default router;
