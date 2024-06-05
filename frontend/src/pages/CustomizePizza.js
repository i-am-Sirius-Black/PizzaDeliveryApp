// CustomizePizza.js

import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CustomizePizza() {
const navigate = useNavigate();
  const location = useLocation();

const [pizza, setPizza] = useState(location.state?.pizza || {}); 

  const [customizedPizza, setCustomizedPizza] = useState({
    _id: pizza._id,
    pizzaName: pizza.pizzaName,
    description: pizza.description,
    base: pizza.base,
    sauce: pizza.sauce,
    cheese: pizza.cheese,
    veggies: [],
    price: pizza.price,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name, value" + name, value);
    setCustomizedPizza({
      ...customizedPizza,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCustomizedPizza((prevFormData) => ({
      ...prevFormData,
      veggies: checked
        ? [...prevFormData.veggies, value]
        : prevFormData.veggies.filter((veggie) => veggie !== value),
    }));
  };

  const handleAddToCart  = (e) => {
    e.preventDefault();

    const modifiedPizza = { ...pizza, ...customizedPizza };
    navigate("/cart", { state: { pizza: modifiedPizza } })
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
    <div className="container">
        <div className="heading">
        <h1 className="font-barlow text-3xl font-bold text-center">Customize Your Pizza</h1>
        </div>
    <div className="max-w-md mx-auto p-4 bg-white barlow-font rounded shadow-md m-5">
    <form onSubmit={handleAddToCart}>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="base"
        >
          Base:
        </label>
        <select
          id="base"
          name="base"
          value={customizedPizza.base}
          onChange={handleInputChange}
          className="capitalize mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="sauce"
        >
          Sauce:
        </label>
        <select
          id="sauce"
          name="sauce"
          value={customizedPizza.sauce}
          onChange={handleInputChange}
          className="capitalize mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="cheese"
        >
          Cheese:
        </label>
        <select
          type="text"
          id="cheese"
          name="cheese"
          value={customizedPizza.cheese}
          onChange={handleInputChange}
          className="capitalize mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Choose Cheese</option>
          <option value="Mozzarella">Mozzarella</option>
          <option value="Cheddar">Cheddar</option>
          <option value="Parmesan">Parmesan</option>
        </select>
      </div>
      <div className="mt-2 flex gap-2 flex-wrap">
        {veggiesOptions.map((veggie) => (
          <div key={veggie} className="flex items-center">
            <input
              type="checkbox"
              name="veggies"
              value={veggie}
            //   checked={pizza.veggies.includes(veggie)}
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
      <div className="cutomize-btn pt-4">
      <button
        className=" w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="submit"
      >
        Place Order
      </button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default CustomizePizza;
