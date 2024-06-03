import React from "react";
import CustomizePizza from "./CustomizePizza";

function BuyPizza() {
  return (
    <>
      <div className="container">
        <div
          class="modal fade"
          id="pizzaBuyModel"
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
              </div>
              <div class="modal-body">
                <p>
                  Fiery Garlic Schezwan Sauce, Parsley Sprinkles, Oodles of
                  Mozzarella Cheese
                </p>
              </div>
              <div class="modal-footer">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#customizePizzaModel"
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Customise Pizza
                </button>
                <button type="button" class="btn btn-primary">
                  <span>
                    <i class="ri-shopping-cart-line" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <CustomizePizza />
      </div>
    </>
  );
}

export default BuyPizza;
