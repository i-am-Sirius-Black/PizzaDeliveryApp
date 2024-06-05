

import React, { useState } from "react";
import Modal from "../Modal";

const PizzasTable = ({ pizzas, editPizza, deletePizza }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPizza, setCurrentPizza] = useState(null);
  const [formData, setFormData] = useState({
    _id: "",
    pizzaName: "",
    description: "",
    base: "",
    sauce: "",
    cheese: "",
    veggies: [],
    price: "",
  });

  const handleEdit = (pizza) => {
    setCurrentPizza(pizza);
    setFormData(pizza);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentPizza(null);
    setFormData({
      _id: "",
      pizzaName: "",
      description: "",
      base: "",
      sauce: "",
      cheese: "",
      veggies: [],
      price: "",
    });
  };

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
    editPizza(formData);
    handleCloseModal();
  };

  const handleDelete = (id) => {
    deletePizza(id);
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
    <div>

<div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 border-2">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          No.
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Description
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Base
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Sauce
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Cheese
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">
          Veggies
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
         ₹ Price
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {pizzas.length > 0 ? (
        pizzas.map((pizza, index) => (
          <tr key={pizza._id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {index}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {pizza.pizzaName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {pizza.description}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {pizza.base}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {pizza.sauce}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {pizza.cheese}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
              {pizza.veggies.join(", ")}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {pizza.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => handleEdit(pizza)}
                className="text-indigo-600 hover:text-indigo-900 mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(pizza._id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan="6"
            className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center"
          >
            No pizzas available.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>


      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
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
              <span className="text-red-500">*</span> Description:
            </label>
            <input
              required
              type="text"
              name="description"
              value={formData.description}
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
              <option value="Alfredo">Pesto</option>
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
                    checked={formData.veggies.includes(veggie)}
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> ₹ Price:
            </label>
            <input
              required
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="pt-5">
            <div className="flex justify-between">
            <a
                onClick={handleCloseModal}
                className="btn ml-3 inline-flex items-center justify-center py-2 px-4 border  shadow-sm text-sm font-bold rounded-md text-white bg-red-500 hover:bg-red-600 hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close <span className="pl-2"><i class="ri-close-large-line"></i></span>
              </a>

              <button
                type="submit"
                className="ml-3 inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="text-lg pr-2"><i class="ri-save-line"></i></span>Save Changes
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default PizzasTable;
