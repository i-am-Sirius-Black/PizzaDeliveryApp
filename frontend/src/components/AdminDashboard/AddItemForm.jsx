import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import axios from 'axios';
import Cookies from 'js-cookie';

function AddItemForm() {
  const [formData, setFormData] = useState({
    item: '',
    quantity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const token = Cookies.get('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.post('http://localhost:5000/api/inventory', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("response inventory add item: " + response);
    } catch (error) {
      console.error('Failed to add inventory item: ', error);
    }

    setFormData({
      item: '',
      quantity: ''
    });
  };

  return (
    <div>
     <div className="container w-2/3 p-4 border-1 rounded-[5px] my-10 shadow">
      <h2 className="text-3xl text-center font-semibold text-zinc-700 alpha-font py-2">Add Inventory Item</h2>
      <FormControl isRequired>
        <FormLabel>Item name</FormLabel>
        <Input
          name="item"
          placeholder="Item Name"
          isRequired
          value={formData.item}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl className="py-2" isRequired>
        <FormLabel>Stock Quantity:</FormLabel>
        <NumberInput min={1}>
          <NumberInputField
            name="quantity"
            placeholder="Qty:"
            value={formData.quantity}
            onChange={handleInputChange}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit}>Add Item</Button>
    </div>
    </div>
  );
}

export default AddItemForm;
