import React, { useEffect, useState } from "react";
import pizzaImg from "../assets/images/05.png";
import OrderDetails from "../components/UserDashboard/OrderDetails";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();

  // const [currentValue, setCurrentValue] = useState(1);
  const [isLoading, setIsLoading] = useState(true); 
  const [orderedPizza, setOrderedPizza] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
  
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(location.state?.pizza), 1000)
      );
      setOrderedPizza(response);
      setIsLoading(false); 
    };

    fetchData();
  }, [location]);

  if (isLoading) {
    return <p>Loading your pizza...</p>;
  }

  const handleCheckout=() => {
    navigate("/checkout", { state:  orderedPizza, })
  }

const gst =orderedPizza.price*0.05;

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
                                    Summary
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
                                    <div className="font-bold text-2xl text-red-400 mb-2 barlow-font">
                                      {orderedPizza.pizzaName}
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-zinc-700 roboto-font">
                                        Pizza Base:-
                                      </h5>
                                      <p>{orderedPizza.base}</p>
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-zinc-700 roboto-font">
                                        Pizza Sauce:-
                                      </h5>
                                      <p>{orderedPizza.sauce}</p>
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-zinc-700 roboto-font">
                                        Cheese Type:-
                                      </h5>
                                      <p>{orderedPizza.cheese}</p>
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-zinc-700 roboto-font">
                                        Veggies:-
                                      </h5>
                                      <span>{orderedPizza.veggies.join(', ')}</span>
                                      {/* {orderedPizza.veggies.map(
                                        (veggie, index) => (
                                          <p key={index}>{veggie}</p>
                                        )
                                      )} */}
                                    </div>
                                  </td>
                                  <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    ₹{orderedPizza.price}
                                  </td>
                                  <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    <NumberInput
                                      size="sm"
                                      // onChange={handleQtyChange}
                                      maxW={20}
                                      defaultValue={1}
                                      min={1}
                                      max={1}
                                      // value={currentValue !== undefined ? currentValue : 1}
                                    >
                                      <NumberInputField />
                                      <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                      </NumberInputStepper>
                                    </NumberInput>
                                  </td>
                                  <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                  ₹{orderedPizza.price}
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
                      <td className="p-2">₹{orderedPizza.price}</td>
                    </tr>
                    <tr className="flex justify-around">
                      <th className="p-2">Gst-5%</th>
                      <td className="p-2">₹{gst}</td>
                    </tr>
                    <tr className="flex justify-around font-bold">
                      <th className="p-2">Total</th>
                      <td className="p-2">₹{orderedPizza.price+gst}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                onClick={handleCheckout}
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

export default Cart;
