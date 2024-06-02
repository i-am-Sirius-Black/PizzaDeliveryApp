import React, { useState } from "react";
import EditPizza from "../Modals/EditPizza";

const PizzasTable = ({ pizzas = [], editPizza, deletePizza }) => {
  const [editingPizza, setEditingPizza] = useState(null);

  // Function to handle editing pizza
  const handleEditPizza = (pizza) => {
    setEditingPizza(pizza); // Set the pizza being edited in the state
  };

  // Handle changes to the pizza being edited
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingPizza({
      ...editingPizza,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // editPizza(editingPizza);
    // setEditingPizza(null);
  };

  return (
    <>
      <div className=" container p-5">
        <table className="min-w-full divide-y divide-gray-200 border-2">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pizza Name
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Veggies
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pizzas.length > 0 ? (
              pizzas.map((pizza) => (
                <tr key={pizza._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    {pizza.pizzaName}
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {pizza.veggies.join(", ")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      // onClick={() => editPizza(pizza._id)}
                      onClick={() => handleEditPizza(pizza)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deletePizza(pizza._id)}
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

      {/* EditPIzza Models Starts HERE */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit This Pizza
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="pizzaName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pizza Name
                  </label>
                  <input
                    type="text"
                    id="pizzaName"
                    name="pizzaName"
                    value={editingPizza ? editingPizza.pizzaName : ""}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Base:
                  </label>
                  {/* Add select field for pizza base */}
                  <select
                    required
                    name="base"
                    value={editingPizza ? editingPizza.base : ""}
                    onChange={handleChange}
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
                {/* Add similar input fields for sauce, cheese, and veggies */}
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                  Update Pizza
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* EditPIzza Models ENDS HERE */}
    </>
  );
};

export default PizzasTable;
