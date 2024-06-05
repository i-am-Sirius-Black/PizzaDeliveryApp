// controllers/userController.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Function to get user information
export const getUserInfo = async (req, res) => {
  try {
    const userId = req.user.id; // using middleware to verify JWT and set user in request object
    const user = await User.findById(userId).select('-password'); // Exclude password from user data
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

