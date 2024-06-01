// models/Pizza.js

import mongoose from 'mongoose';


const PizzaSchema = new mongoose.Schema({
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


const Pizza = mongoose.model('Pizza', PizzaSchema);

export default Pizza;
