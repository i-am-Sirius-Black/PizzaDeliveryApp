import React, { useState } from "react";
import { FormControl, Input, Stack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";

function Checkout() {
  const [mode, setMode] = useState("1");
  return (
    <div className="main">
      <div className="container flex flex-col px-52 mb-20">
        <div className="py-5 ">
          <h1 className="alpha-font text-5xl mb-2">Checkout</h1>
          <p className="roboto-font text-lg text-zinc-500">
            If you wish to leave a note for the delivery person please fill in
            the notes section at the bottom.
          </p>
        </div>

        <div className="flex gap-5">
          <div className="billing-details w-2/3">
            <div className="text-left">
              <h1 className="text-4xl font-bold alpha-font">Billing details</h1>
              <div className="address-form ">
                <FormControl >
                  <Input className="my-2" placeholder="Full name" />
                  <Input className="my-2" placeholder="Mobile number" />
                  <Input className="my-2" placeholder="Pincode" />
                  <Input
                    className="my-2"
                    placeholder="Flat, House no., Building, Company, Apartment"
                  />
                  <Input
                    className="my-2"
                    placeholder="Area, Street, Sector, Village"
                  />
                  <Input className="my-2" placeholder="Landmark" />
                  <Input className="my-2" placeholder="Town/City" />
                  <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white font-semibold w-1/4 h-[30px] rounded-[3px]">Save Details</button>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="your-order w-1/2">
            <h1 className="text-4xl font-bold alpha-font">Your order</h1>
            <div className="payment">
              <div className="table-div my-2">
                <table className=" w-full roboto-font">
                  {/* <tbody>
                    <th className="text-xl text-zinc-700 py-3 bg-zinc-100">Product</th>
                    <th className="text-xl text-zinc-700 py-3 bg-zinc-100">Subtotal</th>
                    <tr><span className="text-md font-semibold">Mushroom Pizza</span> x <span className="font-semibold">1</span>
                    <td>₹510</td>
                    </tr>
                    <tr><span className="text-md font-semibold">Pizza size:</span> 12 inch [+₹150] -
                    <td>₹660</td>
                    </tr>
                    <tr><span className="text-md font-semibold">Extras:</span> extra-cheese [+₹50] -
                    <td>₹710</td>
                    </tr>
                    <tr><span className="text-md font-semibold">Discount:</span> 
                    <td>₹50</td>
                    </tr>
                    <th className="text-xl text-zinc-700 py-3 bg-zinc-100">Total</th>
                    <th className="text-xl text-zinc-700 py-3 bg-zinc-100">₹660</th>
                  </tbody> */}
                  <thead>
                    <tr>
                      <th className="text-xl text-zinc-700 py-3 bg-zinc-100 p-2">
                        Product
                      </th>
                      <th className="text-xl text-zinc-700 py-3 bg-zinc-100">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="py-2">
                      <td className="p-2">
                        <span className="text-md font-semibold">
                          Mushroom Pizza
                        </span>{" "}
                        x <span className="font-semibold">1</span>
                      </td>
                      <td className="p-2">₹510</td>
                    </tr>
                    <tr className="py-2">
                      <td className="p-2">
                        <span className="text-md font-semibold">
                          Pizza size:
                        </span>{" "}
                        12 inch [+₹150]
                      </td>
                      <td className="p-2">₹660</td>
                    </tr>
                    <tr className="py-2">
                      <td className="p-2">
                        <span className="text-md font-semibold">Extras:</span>{" "}
                        extra-cheese [+₹50]
                      </td>
                      <td className="p-2">₹710</td>
                    </tr>
                    <tr className="py-2">
                      <td className="p-2">
                        <span className="text-md font-semibold">Discount:</span>
                      </td>
                      <td className="p-2">-₹50</td>
                    </tr>
                    <tr className="py-2 text-lg font-bold bg-zinc-100">
                      <td className="p-2">Total:</td>
                      <td className="p-2 text-green-500">₹660</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="paymet-div">
                <div className="payment-mode p-3 ">
                  <RadioGroup className="font-black font-semibold text-zinc-600" onChange={setMode} value={mode}>
                    <Stack direction="column">
                      <Radio colorScheme='blue' value="1">Cash On Delivery</Radio>
                      <Radio colorScheme='green' value="2">Credit / Debit Card</Radio>
                    </Stack>
                  </RadioGroup>
                  <p className="mt-2 text-sm">Pay Securely by Credit / Debit card or Internet banking through Razorpay.</p>
                </div>
                <div className="order-btn">
                  <p className="py-3 text-sm">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a className="text-blue-700" href="/privacy-policy">privacy policy</a>.</p>
                 <button className="bg-[#7ED321] hover:bg-[#69ba0d] w-full h-[70px] text-xl font-bold">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
