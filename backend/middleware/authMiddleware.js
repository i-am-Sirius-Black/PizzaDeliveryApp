import jwt from 'jsonwebtoken';
import User from '../models/User.js';

//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     token = req.headers.authorization.split(' ')[1];
//   }

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       error: 'Not authorized to access this route',
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id);
//     next();
//   } catch (err) {
//     return res.status(401).json({
//       success: false,
//       error: 'Not authorized to access this route',
//     });
//   }
// };

export const protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to access this route',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    next();
  } catch (err) {
    console.error('Authentication error:', err.message);
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route',
    });
  }
};

export const admin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      error: 'User is not authorized to access this route',
    });
  }
  next();
};
