// import mongoose from 'mongoose';

// const OrderSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   pizza: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Pizza',
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   razorpay_payment_id: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['Order Received', 'In the Kitchen', 'Out for Delivery', 'Delivered', 'paid'],
//     default: 'Order Received',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Order = mongoose.model('Order', OrderSchema);

// export default Order;


import mongoose from 'mongoose';

const CustomizationsSchema = new mongoose.Schema({
  base: {
    type: String,
    required: true,
  },
  sauce: {
    type: String,
    required: true,
  },
  cheese: {
    type: String,
    required: true,
  },
  veggies: {
    type: [String],
    required: true,
  },
});


const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pizza',
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Order Received', 'In the Kitchen', 'Out for Delivery', 'Delivered', 'paid'],
    default: 'Order Received',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  customizations: {
    type: CustomizationsSchema,
    required: true,
  },
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
