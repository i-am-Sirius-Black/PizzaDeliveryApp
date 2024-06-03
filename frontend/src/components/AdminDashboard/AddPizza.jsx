

import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    addPizza(formData);
    setFormData({
      pizzaName: "",
      base: "",
      sauce: "",
      cheese: "",
      veggies: [],
    });
  };

  const veggiesOptions = [
    "Tomatoes",
    "Olives",
    "Mushrooms",
    "Onions",
    "Peppers",
    "Spinach",
    "Basil",
  ];

  return (
    <div className="container w-full p-5 flex justify-center">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded shadow-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> Pizza Name:
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
              <span className="text-red-500">*</span> Base:
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
              <span className="text-red-500">*</span> Sauce:
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
              <option value="Alfredo">Alfredo</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> Cheese:
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
              <span className="text-red-500">*</span> Veggies:
            </label>
            <div className="mt-2 flex gap-2 flex-wrap">
              {veggiesOptions.map((veggie) => (
                <div key={veggie} className="flex items-center">
                  <input
                    type="checkbox"
                    name="veggies"
                    value={veggie}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={veggie}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {veggie}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Pizza
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPizza;
