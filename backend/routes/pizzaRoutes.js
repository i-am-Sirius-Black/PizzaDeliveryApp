// routes/pizzaRoutes.js

import express from 'express';
import { getPizzas, addPizza, updatePizza, deletePizza } from '../controllers/pizzaController.js';

const router = express.Router();

// Routes
router.get('/', getPizzas);
router.post('/', addPizza);
router.put('/:id', updatePizza);
router.delete('/:id', deletePizza);

export default router;
