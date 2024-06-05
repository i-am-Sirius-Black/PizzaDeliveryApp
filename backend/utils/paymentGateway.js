import crypto from 'crypto';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import Pizza from '../models/Pizza.js';
import User from '../models/User.js';
import Order from '../models/Order.js';

dotenv.config();

const RazorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createOrderId = async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({ orderId: order.id });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).send('Error creating order');
  }
}


export const verifyPayment = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature, amount, address, phone, userId, pizzaId } = req.body;
  console.log(razorpay_payment_id," ",razorpay_order_id," ",razorpay_signature," ",amount," ",address," ",phone," ",userId," ",pizzaId);

  if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
    return res.status(400).json({ status: "unauthorized", error: "Missing fields" });
  }

  const hmac = crypto.createHmac('sha256', RazorpayKeySecret);
  hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const generated_signature = hmac.digest('hex');

  if (generated_signature === razorpay_signature) {
    let order = await Order.findOne({ razorpay_order_id });
    if (!order) {
      order = new Order({
        user: userId,
        pizza: pizzaId,
        address,
        phone,
        amount,
        razorpay_payment_id,
        status: 'Order Received',  //will set when payment is received
      });
      await order.save();
    } else {
      order.status = 'paid';
      order.razorpay_payment_id = razorpay_payment_id;
      order.amount = amount;
      order.address = address;
      order.phone = phone;
      await order.save();
    }

    res.json({ status: "authorized", orderId: order._id, address: order.address, phone: order.phone, amount: order.amount });
  } else {
    res.status(400).json({ status: "unauthorized" });
  }
};