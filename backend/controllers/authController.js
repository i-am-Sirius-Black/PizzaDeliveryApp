import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sendEmail from '../utils/email.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.status(201).json({
      success: true,
      token,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.status(200).json({
      success: true,
      token,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export const forgotPassword = async (req, res) => {
  const { email, baseResetUrl } = req.body;
  console.log("email sent to backend",email);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
   
    const resetUrl = `${baseResetUrl}/${resetToken}`;
    console.log("resetUrl sent to Mail "+baseResetUrl+ "/" +resetToken);

    console.log("req protocol: " + req.protocol);

    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a put request to: \n\n ${resetUrl}`;
    
    try {
      await sendEmail({
        email: user.email,
        subject: 'Password Reset Token',
        message,
      });
      res.status(200).json({
        success: true,
        data: 'Email sent',
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Email could not be sent',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const resetPassword = async (req, res) => {
  const resetToken = req.params.resetToken;
  try {
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }
    user.password = req.body.password;
    await user.save();
    res.status(200).json({
      success: true,
      data: 'Password reset successful',
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: 'Invalid token',
    });
  }
};
