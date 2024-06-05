import React, { useContext, useEffect, useState } from "react";
import { FormControl, Input, Stack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";


function Checkout() {

  const navigate = useNavigate(); 
  const { currentUserId, userEmail } = useContext(AuthContext);
  
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ pizzaId: "", userId: currentUserId });
  const [orderStatus, setOrderStatus] = useState({
    orderNumber: "",
    address: "",
    phone: "",
    paymentMode: "",
    paid: "",
  });
  const [orderedPizza, setOrderedPizza] = useState("");
  const [mode, setMode] = useState("1");
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    pincode: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
  });
  const token = Cookies.get("token");
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setIsRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  // const handlePlaceOrder = async () => {
  //   if (mode !== "2") {
  //     navigate("/status", { state: orderedPizza }); 
  //     console.log("sending to status: " + orderedPizza);
  //     return;
  //   }

  //   if (!isRazorpayLoaded) {
  //     console.error("Razorpay is not loaded yet.");
  //     return;
  //   }

  //   const totalPrice = orderedPizza.price;

  //   try {
  //     // Fetch the order ID from the server
  //     const orderResponse = await axios.post('http://localhost:5000/api/order', { amount: totalPrice });
  //     const orderId = orderResponse.data.orderId;
      

  //     const options = {
  //       key: "rzp_test_FnYlcIVeGU6aFM", // razorpay id , put it in .env
  //       amount: totalPrice * 100, 
  //       currency: "INR",
  //       name: "Pizza Delivery",
  //       description: `Order for ${orderedPizza.pizzaName}`,
  //       order_id: orderId,
  //       prefill: {
  //         name: address.name,
  //         email: userEmail, 
  //         contact: address.phone,
  //       },
  //       theme: {
  //         color: "#333333",
  //       },
  //       handler: async (response) => {
  //         try {
  //           console.log("response: ", response);
  //           console.log("Payment ID: ", response.razorpay_payment_id);
  //           console.log("Order ID: ", response.razorpay_order_id);
  //           console.log("Signature: ", response.razorpay_signature);

  //           const verificationData = {
  //             razorpay_payment_id: response.razorpay_payment_id,
  //             razorpay_order_id: response.razorpay_order_id,
  //             razorpay_signature: response.razorpay_signature,
  //           };

  //           const verificationResponse = await axios.post('http://localhost:5000/api/verify', verificationData, {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           });

  //           if (verificationResponse.data.status === "authorized") {
  //             console.log("Payment successful!");
  //             alert("Payment successful! Your order is confirmed.");
  //           } else {
  //             console.error("Payment verification failed:", verificationResponse.data);
  //             alert("Payment failed. Please try again.");
  //           }
  //         } catch (error) {
  //           console.error("Error verifying payment:", error);
  //           alert("An error occurred during payment verification. Please try again.");
  //         }
  //       },
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();
  //   } catch (error) {
  //     console.error("Error creating Razorpay order:", error);
  //     alert("An error occurred while creating the payment order. Please try again.");
  //   }
  // };


  const handlePlaceOrder = async () => {
    if (mode !== "2") {
      navigate("/status", { state: orderedPizza });
      console.log("sending to status: " + orderedPizza);
    }
    if (!isRazorpayLoaded) {
      console.error("Razorpay is not loaded yet.");
      return;
    }
  
    const totalPrice = orderedPizza.price;

        const orderResponse = await axios.post('http://localhost:5000/api/order', { amount: totalPrice });
      const orderId = orderResponse.data.orderId;
  
    const options = {
      // key: RAZORPAY_KEY_ID,
      key: "rzp_test_FnYlcIVeGU6aFM",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Pizza Delivery",
      description: `Order for ${orderedPizza.pizzaName}`,
      order_id: orderId,
      prefill: {
        name: address.name,
        email: userEmail,
        contact: address.phone,
      },
      theme: {
        color: "#333333",
      },
      handler: async (response) => {
        try {
          console.log("response: ", response);
          // Ensure all necessary data is present in the response
        if (!response.razorpay_payment_id || !response.razorpay_order_id || !response.razorpay_signature) {
          console.error("Incomplete Razorpay response:", response);
          alert("Incomplete payment response. Please try again.");
          return;
        }
          const verificationData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            amount: totalPrice,
            address: `${address.flat}, ${address.area}, ${address.landmark}, ${address.city}, ${address.pincode}`,
            phone: address.phone,
            userId: currentUserId,
            pizzaId: orderedPizza._id,
          };
  
          const verificationResponse = await axios.post('http://localhost:5000/api/verify', verificationData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (verificationResponse.data.status === "authorized") {
            console.log("Payment successful!");
            alert("Payment successful! Your order is confirmed.");
            navigate("/status", {
              state: {
                orderId: verificationResponse.data.orderId,
                address: verificationResponse.data.address,
                phone: verificationResponse.data.phone,
                amount: verificationResponse.data.amount,
              },
            }); // Redirect to status page with data
          } else {
            console.error("Payment verification failed:", verificationResponse.data);
            alert("Payment failed. Please try again.");
          }
        } catch (error) {
          console.error("Error verifying payment:", error);
          alert("An error occurred during payment verification. Please try again.");
        }
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new Promise((resolve) => setTimeout(() => resolve(location.state), 1000));
        setOrderedPizza(response);
      } catch (error) {
        console.error("Error fetching pizza data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    console.log("address saved: ", address);
  };
  
  const itemPrice = {
    base: 70,
    sauce: 30,
    cheese: 50,
    veggies: 43,
  };

  const gst =orderedPizza.price*0.05;

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
                <FormControl onSubmit={handleSubmitAddress}>
              

<Input
      className="my-2"
      placeholder="Full name"
      required
      name="name"
      onChange={handleAddressChange}
    />
    <Input
      className="my-2"
      placeholder="Mobile number"
      required
      name="phone"
      onChange={handleAddressChange}
    />
    <Input
      className="my-2"
      placeholder="Pincode"
      required
      name="pincode"
      onChange={handleAddressChange}
    />
    <Input
      required
      name="flat"
      onChange={handleAddressChange}
      className="my-2"
      placeholder="Flat, House no., Building, Company, Apartment"
    />
    <Input
      onChange={handleAddressChange}
      required
      name="area"
      className="my-2"
      placeholder="Area, Street, Sector, Village"
    />
    <Input
      required
      name="landmark"
      className="my-2"
      placeholder="Landmark"
      onChange={handleAddressChange}
    />
    <Input
      required
      name="city"
      className="my-2"
      placeholder="Town/City"
      onChange={handleAddressChange}
    />
                  <button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-500 text-white font-semibold w-1/4 h-[30px] rounded-[3px]"
                  >
                    Save Details
                  </button>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="your-order w-2/3">
            <h1 className="text-4xl font-bold alpha-font">Your order</h1>
            <div className="payment">
              <div className="table-div my-2">
                <table className=" w-full roboto-font">
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
                    {orderedPizza ? (
                      <>
                        <tr className="py-2">
                          <td className="p-2">
                            <span className="text-md font-semibold">
                              {orderedPizza.pizzaName}
                            </span>{" "}
                            x <span className="font-semibold">1</span>
                          </td>
                          <td className="p-2">₹{Math.floor(orderedPizza.price+gst)}</td>
                        </tr>
                        <tr className="py-2">
                          <td className="p-2">
                            <span className="text-md font-semibold">
                              Extras:
                            </span>{" "}
                            {orderedPizza.base}
                            {orderedPizza.sauce}
                            {orderedPizza.cheese}
                            {orderedPizza.veggies}
                          </td>
            
                        </tr>
                        
                        <tr className="py-2">
                          <td className="p-2">
                            <span className="text-md font-semibold">
                              Discount:
                            </span>
                          </td>
                          <td className="p-2">-₹50</td>
                        </tr>
                        <tr className="py-2 text-lg font-bold bg-zinc-100">
                          <td className="p-2">Total:</td>
                          <td className="p-2 text-green-500">
                            ₹{Math.floor(orderedPizza.price+gst-50)}
                          </td>
                        </tr>
                      </>
                    ) : (
                      <tr className="text-center p-4">
                        <td>Loading your Pizza...</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="paymet-div">
                <div className="payment-mode p-3 ">
                  <RadioGroup
                    className="font-black font-semibold text-zinc-600"
                    onChange={setMode}
                    value={mode}
                  >
                    <Stack direction="column">
                      <Radio colorScheme="blue" value="1">
                        Cash On Delivery
                      </Radio>
                      <Radio colorScheme="green" value="2">
                        Credit / Debit Card
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <p className="mt-2 text-sm">
                    Pay Securely by Credit / Debit card or Internet banking
                    through Razorpay.
                  </p>
                </div>
                <div className="order-btn">
                  <p className="py-3 text-sm">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <a className="text-blue-700" href="/privacy-policy">
                      privacy policy
                    </a>
                    .
                  </p>
                  <button
                    id="rzp-button1"
                    onClick={handlePlaceOrder}
                    className="bg-[#7ED321] hover:bg-[#69ba0d] w-full h-[70px] text-xl font-bold"
                  >
                    Place Order
                  </button>
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
