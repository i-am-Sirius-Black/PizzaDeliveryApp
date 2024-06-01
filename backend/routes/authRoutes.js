import express from 'express';
import {
  register,
  login,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);

export default router;
