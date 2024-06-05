import Order from '../models/Order.js';
import Pizza from '../models/Pizza.js';
import Inventory from '../models/Inventory.js';
import User from '../models/User.js';

// export const createOrder = async (req, res) => {
//   const { pizzaId, userId } = req.body;
//   try {
//     const pizza = await Pizza.findById(pizzaId);
//     if (!pizza) {
//       return res.status(404).json({
//         success: false,
//         error: 'Pizza not found',
//       });
//     }
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found',
//       });
//     }
//     const order = await Order.create({
//       user: userId,
//       pizza: pizzaId,
//     });
//     res.status(201).json({
//       success: true,
//       data: order,
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       error: err.message,
//     });
//   }
// };

// export const getOrder = async (req, res) => {
//   const orderId = req.params.id;
//   try {
//     const order = await Order.findById(orderId).populate('pizza user');
//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         error: 'Order not found',
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: order,
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       error: err.message,
//     });
//   }
// };


// Endpoint to get orders by userId

export const getOrder = async (req, res) => {
  const userId = req.params.userId;
  try {
    const orders = await Order.find( userId ).populate('pizza user');
    if (!orders || orders.length === 0) {
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
