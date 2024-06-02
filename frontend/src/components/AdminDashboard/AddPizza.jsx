import React, { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const AddPizza = ({ addPizza }) => {

  const [formData, setFormData] = useState({
    pizzaName: "",
    base: "",
    sauce: "",
    cheese: "",
    veggies: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      veggies: checked
        ? [...prevFormData.veggies, value]
        : prevFormData.veggies.filter((veggie) => veggie !== value),
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Add PIzza formdata: ", formData);
    // addPizza(formData);
    try {
      const token = Cookies.get("token");
        if (!token) {
          throw new Error("Token not found");
        }
      const response = await axios.post(
        "http://localhost:5000/api/pizza",formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );
      console.log("Response from add Pizza:", response);

      addPizza(response.data.data); // Updating pizzas state in the parent component
      
      // Reset form after submission
      setFormData({
        pizzaName: "",
        base: "",
        sauce: "",
        cheese: "",
        veggies: [],
      });

      // Reset all checkboxes
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => checkbox.checked = false);

    } catch (error) {
      console.error("Failed to add pizza:", error);
    }
  };

  return (
    <div className="container w-full p-5 flex justify-center">
      <div className="form-card w-1/2">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 bg-white rounded shadow-lg"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pizza Name:
          </label>
          <input
            required
            type="text"
            name="pizzaName"
            value={formData.pizzaName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Base:
          </label>
          <select
            required
            name="base"
            value={formData.base}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose Base</option>
            <option value="Thin Crust">Thin Crust</option>
            <option value="Thick Crust">Thick Crust</option>
            <option value="Stuffed Crust">Stuffed Crust</option>
            <option value="Cheese Burst">Cheese Burst</option>
            <option value="Multigrain">Multigrain</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sauce:
          </label>
          <select
            required
            name="sauce"
            value={formData.sauce}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose Sauce</option>
            <option value="Tomato">Tomato</option>
            <option value="BBQ">BBQ</option>
            <option value="Pesto">Pesto</option>
            <option value="Tandoori">Tandoori</option>
            <option value="Alfredo">Pesto</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cheese:
          </label>
          <select
            required
            name="cheese"
            value={formData.cheese}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose Cheese</option>
            <option value="Mozzarella">Mozzarella</option>
            <option value="Cheddar">Cheddar</option>
            <option value="Parmesan">Parmesan</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Veggies:
          </label>
          <div className="mt-2 space-y-2">
            <div>
              <input
                name="Peppers"
                type="checkbox"
                value="Peppers"
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              Peppers
            </div>
            <div>
              <input
                type="checkbox"
                value="Onions"
                name="Onions"
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              Onions
            </div>
            <div>
              <input
                type="checkbox"
                value="Olives"
                name="Olives"
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              Olives
            </div>
            <div>
              <input
                type="checkbox"
                value="Basil"
                name="Basil"
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              Basil
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Pizza
        </button>
      </form>
      </div>
    </div>
  );

};

export default AddPizza;
