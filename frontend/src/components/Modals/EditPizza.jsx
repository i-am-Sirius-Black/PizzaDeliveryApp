import React, { useEffect, useState } from "react";

function EditPizza({ pizza, editPizza }) {
  console.log("pizza edit: " + pizza);

  const [editedPizza, setEditedPizza] = useState({});

  useEffect(() => {
    // Set the initial state of editedPizza when pizza prop changes
    setEditedPizza(pizza);
  }, [pizza]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call editPizza function to update the pizza with editedPizza state
    // editPizza(editedPizza);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPizza({
      ...editedPizza,
      [name]: value,
    });
  };

  return (
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
                  value={pizza.pizzaName}
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
                  value={pizza.base}
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
  );
}

export default EditPizza;
