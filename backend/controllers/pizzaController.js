// controllers/pizzaController.js

import Pizza from '../models/Pizza.js';

// Get all pizzas
export const getPizzas = async (req, res) => {
  try {
    const pizza = await Pizza.find();
    res.status(200).json({
      success: true,
      data: pizza,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Add a new pizza
export const addPizza = async (req, res) => {
  const {pizzaName, base, sauce, cheese, veggies} =req.body;
  try {
    const newPizza = new Pizza({pizzaName, base, sauce, cheese, veggies});
    await newPizza.save();
    res.status(201).json({
      success: true,
      data: newPizza,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Update a pizza
export const updatePizza = async (req, res) => {
  const {id} = req.params;
  const {pizzaName, base, sauce, cheese, veggies} = req.body;
  try {
    const updatedPizza = await Pizza.findOneAndUpdate(
      {_id: id},
      {pizzaName, base, sauce, cheese, veggies},
      {new: true}
    )
    if (!updatedPizza){
      return res.status(404).json({success: false, message: 'Pizza not found'});
    }
    res.status(200).json({success: true,data:updatedPizza ,message: 'Pizza Updated Successfully', updatePizza});
  } catch (error) {
    console.error('Failed to update pizza (server):', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Delete a pizza
export const deletePizza = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPizza = await Pizza.findOneAndDelete({ _id: id });
    if (!deletedPizza) {
      return res.status(404).json({ success: false, message: 'Pizza not found' });
    }
    res.status(200).json({ success: true, message: 'Pizza deleted successfully', deletedPizza });
  } catch (error) {
    console.error('Failed to delete pizza:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
