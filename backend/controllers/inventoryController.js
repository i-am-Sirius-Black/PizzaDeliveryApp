

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




// Update the quantity of an existing inventory item
export const updateInventory = async (req, res) => {
  const {_id, item, quantity, price } = req.body;

  console.log("update inventory server side=>  id: ", _id, " quantity: ", quantity, " price: ", price);

  try {
    let inventoryItem = await Inventory.findById(_id);

    if (!inventoryItem) {
      return res.status(404).json({
        success: false,
        error: 'Item not found',
      });
    }

    // Update the item fields
    if (item !== undefined) inventoryItem.item = item.toLowerCase();
    if (quantity !== undefined) inventoryItem.quantity = quantity;
    if (price !== undefined) inventoryItem.price = price;

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





// Add a new inventory item or update the quantity if it already exists
export const addInventoryItem = async (req, res) => {
  const { item, quantity, price } = req.body;
  try {
    const lowerCaseItem = item.toLowerCase(); // Convert item name to lowercase
    let inventoryItem = await Inventory.findOne({ item: lowerCaseItem });

    if (inventoryItem) {
      // If the item already exists, update its quantity
      inventoryItem.quantity += quantity;
      if (price !== undefined) {
        inventoryItem.price = price; // Update the price if provided
      }
      await inventoryItem.save();

      res.status(200).json({
        success: true,
        data: inventoryItem,
      });
    } else {
      // If the item does not exist, create a new inventory item
      const newItem = new Inventory({ item: lowerCaseItem, quantity, price });
      await newItem.save();

      res.status(201).json({
        success: true,
        data: newItem,
      });
    }
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

