import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
    set: v => v.toLowerCase(), // Set the item name to lowercase
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
},{timestamps:true});


const Inventory = mongoose.model('Inventory', InventorySchema);
export default Inventory;