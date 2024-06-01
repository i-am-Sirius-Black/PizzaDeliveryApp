import express from 'express';
import { getUserInfo } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


const router = express.Router();


router.get('/user',protect, getUserInfo); 

export default router;

