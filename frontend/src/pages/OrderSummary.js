import React from "react";
import pizzaImg from "../assets/images/05.png";
import OrderDetails from "../components/UserDashboard/OrderDetails";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function OrderSummary() {
  return (
    <>
      <section className="Basket">
        <div className="container flex justify-between mb-10">
          <div className="order-details">
            <h1 className="text-5xl font-black barlow-font py-4 text-center">
              Basket
            </h1>
            <div class="flex flex-col">
              <div class=" overflow-x-auto">
                <div class="min-w-2/3  inline-block align-middle">
                  <div class="overflow-hidden border rounded-lg border-gray-300">
                    <div class="flex flex-col">
                      <div class=" overflow-x-auto">
                        <div class="min-2/3 inline-block align-middle">
                          <div class="overflow-hidden border rounded-lg border-gray-300">
                            <table class=" min-2/3 rounded-xl">
                              <thead>
                                <tr class="bg-gray-50">
                                  <th
                                    scope="col"
                                    class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                                  >
                                    Item
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                                  >
                                    Order-summary
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                                  >
                                    Subtotal
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="odd:bg-white even:bg-gray-50">
                                  <td class="pl-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                                    <div className="img-container w-[100px]">
                                      <img src={pizzaImg} alt="" />
                                    </div>
                                  </td>
                                  <td class="p-5 whitespace-nowrap text-sm leading-6 text-gray-900">
                                    <div className="font-bold text-xl mb-2 barlow-font">
                                      Meatball Pizza
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-zinc-700 roboto-font">
                                        Pizza Size:-
                                      </h5>
                                      <p>12 Inch</p>
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-zinc-700 roboto-font">
                                        Pizza Sauce:-
                                      </h5>
                                      <p>Marinara Sauce</p>
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-zinc-700 roboto-font">
                                        Cheese Type:-
                                      </h5>
                                      <p>Goat Cheese</p>
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-zinc-700 roboto-font">
                                        Veggies:-
                                      </h5>
                                      <p>Capsicum, Tomamto, Garlic</p>
                                    </div>
                                  </td>
                                  <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    ₹550
                                  </td>
                                  <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    <NumberInput
                                      size="sm"
                                      maxW={20}
                                      defaultValue={1}
                                      min={1}
                                      max={10}
                                    >
                                      <NumberInputField />
                                      <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                      </NumberInputStepper>
                                    </NumberInput>
                                  </td>
                                  <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    ₹550
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="totals-card w-1/2 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-black barlow-font py-4 text-center">
              Basket Totals
            </h1>
            <div className="total  ">
              <div className="table-div">
                <table className="bg-zinc-100 w-full">
                  <tbody>
                    <tr className="flex justify-around">
                      <th className="p-2">Subtotal</th>
                      <td className="p-2">₹150</td>
                    </tr>
                    <tr className="flex justify-around">
                      <th className="p-2">Gst-5%</th>
                      <td className="p-2">₹7.5</td>
                    </tr>
                    <tr className="flex justify-around font-bold">
                      <th className="p-2">Total</th>
                      <td className="p-2">₹157.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="/checkout"
                className="checkout-btn p-2 mt-2 rounded-[2px] flex justify-around items-center bg-[#7ED321] hover:bg-green-600 hover:text-white w-full h-[60px] text-zinc-700 font-bold text-2xl roboto-font"
              >
                <h2 className="">Proceed to checkout</h2>
                <span>
                  <i class="ri-arrow-right-line"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="price-breakdown">
      </section>

      <section className="delivery-address"></section>

      <section className="payment">
        <div className="container">
          <div className="place-order"></div>
        </div>
      </section> */}
    </>
  );
}

export default OrderSummary;
