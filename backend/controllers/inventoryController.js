

import Inventory from '../models/Inventory.js';

export const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export const updateInventory = async (req, res) => {
  const { item, quantity } = req.body;
  try {
    let inventoryItem = await Inventory.findOne({ item });

    if (!inventoryItem) {
      return res.status(404).json({
        success: false,
        error: 'Item not found',
      });
    }

    inventoryItem.quantity = quantity;
    await inventoryItem.save();

    res.status(200).json({
      success: true,
      data: inventoryItem,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export const addInventoryItem = async (req, res) => {
  const { item, quantity } = req.body;
  console.log("item added: " + req.body);
  try {
    const newItem = new Inventory({ item, quantity });
    await newItem.save();
    res.status(201).json({
      success: true,
      data: newItem,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export const deleteInventoryItem = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedItem = await Inventory.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        error: 'Item not found',
      });
    }
    res.status(200).json({
      success: true,
      data: deletedItem,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

