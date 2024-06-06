import Order from '../models/Order.js';
import Pizza from '../models/Pizza.js';
import Inventory from '../models/Inventory.js';
import User from '../models/User.js';


// Endpoint to get orders by userId

// export const getOrder = async (req, res) => {
//   const userId = req.params.userId;
//   if (!userId) {
//     return res.status(400).json({
//       success: false,
//       error: 'User ID is required',
//     });
//   }
//   try {
//     const orders = await Order.find( {user: userId} ).populate('pizza user');
//     if (!orders || orders.length === 0) {
//       return res.status(404).json({
//         success: false,
//         error: 'No orders found for this user',
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: orders,
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       error: err.message,
//     });
//   }
// };

// controllers/orderController.js

export const getOrder = async (req, res) => {
  const userId = req.params.id;
  
  if (!userId) {
    console.log('User ID not provided');
    return res.status(400).json({
      success: false,
      error: 'User ID is required',
    });
  }
  
  try {
    // Verify if user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      console.log('User not found');
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    console.log(`Fetching orders for user ID: ${userId}`);
    const orders = await Order.find({ user: userId }).populate('pizza user');
    if (!orders || orders.length === 0) {
      console.log('No orders found for this user');
      return res.status(404).json({
        success: false,
        error: 'No orders found for this user',
      });
    }
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    console.error(`Error fetching orders: ${err.message}`);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};



// Endpoint to get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('pizza user');
    if (!orders || orders.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'No orders found',
      });
    }
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};




export const updateOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true, runValidators: true }
    );
    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found',
      });
    }
    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
