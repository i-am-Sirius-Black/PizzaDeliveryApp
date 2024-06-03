import React from "react";

function CustomizePizza() {
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
    <>
      <div>
        <div
          class="modal fade"
          id="customizePizzaModel"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Pepperoni Pizza
                </h1>
                {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              </div>
              <div class="modal-body">
                <form action="">
                  <label
                    htmlFor="base"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pizza Base:
                  </label>

                  <select
                    type="select"
                    id="base"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Choose Base</option>
                    <option value="Thin Crust">Thin Crust</option>
                    <option value="Thick Crust">Thick Crust</option>
                    <option value="Stuffed Crust">Stuffed Crust</option>
                    <option value="Cheese Burst">Cheese Burst</option>
                    <option value="Multigrain">Multigrain</option>
                  </select>

                  <label
                    htmlFor="sauce"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sauce:
                  </label>

                  <select
                    type="select"
                    id="sauce"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Choose Sauce</option>
                    <option value="Thin Crust">Thin Crust</option>
                    <option value="Thick Crust">Thick Crust</option>
                    <option value="Stuffed Crust">Stuffed Crust</option>
                    <option value="Cheese Burst">Cheese Burst</option>
                    <option value="Multigrain">Multigrain</option>
                  </select>

                  <label
                    htmlFor="cheese"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cheese:
                  </label>

                  <select
                    type="select"
                    id="cheese"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Choose Cheese</option>
                    <option value="Thin Crust">Thin Crust</option>
                    <option value="Thick Crust">Thick Crust</option>
                    <option value="Stuffed Crust">Stuffed Crust</option>
                    <option value="Cheese Burst">Cheese Burst</option>
                    <option value="Multigrain">Multigrain</option>
                  </select>

                  <label className="block text-sm font-medium text-gray-700">
                    Veggies:
                  </label>
    
                  <div className="mt-2 flex gap-3 flex-wrap ">
                    {veggiesOptions.map((veggie) => (
                      <div key={veggie} className="flex items-center">
                      
                        <input
                          type="checkbox"
                          // id={veggie}
                          // name="veggies"
                          // value={veggie}
                          // checked={editingPizza.veggies.includes(veggie)}
                          // onChange={handleVeggiesChange}
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 form-check-input"
                        />
                        <label
                          htmlFor={veggie}
                          className="ml-2 block text-sm text-gray-700"
                        >
                          {veggie}
                        </label>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Add to Cart
                  <span>
                    <i class="ri-shopping-cart-line pl-2" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomizePizza;
