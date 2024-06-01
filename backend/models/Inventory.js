import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});


// const InventorySchema = new mongoose.Schema({
//   item: {
//     type: String,
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
// });

const Inventory = mongoose.model('Inventory', InventorySchema);
export default Inventory;