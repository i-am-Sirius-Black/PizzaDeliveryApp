import React, { useContext, useEffect, useState } from 'react'
import pizzaMaking from '../assets/images/pizza-making.jpg'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function OrderStatus() {
const {currentUserId} = useContext(AuthContext);
const [orderData, setOrderData] = useState(null);


 const token = Cookies.get('token');
  
 useEffect(() => {
    const fetchOrderData = async () => {
      try {
        if (!token) {
          console.log("Token not found, not logged in?");
          return;
        }
        const response = await axios.get(`http://localhost:5000/api/getOrder/${currentUserId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const orderDataResponse = response.data.data;
      // console.log("orderDataResponse", orderDataResponse);
      setOrderData(orderDataResponse);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    }
    fetchOrderData();
},[currentUserId, token]);

if (!orderData) {
  return <div>Loading...</div>;
}

const getStatusText = (status) => {
  switch (status) {
    case 'Order Received':
      return 'The restaurant has received your order. Please wait while we confirm your order.';
    case 'In the Kitchen':
      return 'Your order is being prepared in the kitchen.';
    case 'Out for Delivery':
      return 'Your order is out for delivery. It will arrive soon!';
    case 'Delivered':
      return 'Your order has been delivered. Enjoy your meal!';
    case 'paid':
      return 'Your payment has been received. Thank you!';
    default:
      return '';
  }
};


  return (
    <div className='main w-full bg-[#f8fcfc]'>
        <div className="container w-4/5 h-[90vh] my-2 flex flex-col ">
            <div className='w-full barlow-font py-3'>
                <p><a href="/"><i class="ri-arrow-left-line"></i>Back to Home</a></p>
                <h1 className='text-3xl font-bold '>Order summary</h1>
            </div>
            
            <div className='flex justify-between gap-4'>
            {orderData && orderData.map((order, index) => (
                <div className="left-div barlow-font bg-white shadow-2xl shadow-zinc-100 rounded-xl">
                    <div className="order-status-card flex">
                        <div className="pizza-img w-1/2 ">
                            <img className='rounded-l-xl' src={pizzaMaking} alt="pizza making" />
                        </div>
                        <div className="summary w-3/4 p-4 ">
                        <h1 className='text-2xl mb-1 font-bold text-green-700'><span className='text-red-700 font-black'>Status:</span> {order.status}</h1>
                         <p className='mb-4 text-zinc-400 italic'>{getStatusText(order.status)}</p>
                            <hr className='mb-4'/>

                            <h4>Order Id:</h4>
                            <p className='font-bold mb-2'>#{order._id}</p>

                            <h4>Delivery Address:</h4>
                            <p className='font-bold mb-2'>{order.address}</p>

                            <h4>Contact Number:</h4>
                            <p className='font-bold mb-2'>{order.phone}</p>

                            <h4>Payment:</h4>
                            <p className='font-bold mb-2'>Online/Card</p>

                            <h4>Amount Paid:</h4>
                            <p className='font-bold mb-2 text-xl text-blue-600'>₹{order.amount}</p>
                        </div>
                    </div>
                </div>
                 ))}
                <div className="right-div w-1/2 ">
                    <div className="help-card bg-white shadow-2xl shadow-zinc-100 px-4 rounded-xl">
                            <div className="help py-4">
                            <i class="ri-message-2-line text-yellow-400 text-4xl"></i>
                            <h1 className='text-2xl mb-1 font-bold text-zinc-700'>Do you need help?</h1>
                            <p className='text-zinc-400'>Do you have any questions about the order? <br />Contact the restaurant.</p>
                            </div>
                            <div className='contact-us font-semibold py-4'>
                            <h4 className='mb-2'><i class="ri-phone-line"></i> +990342212</h4>
                            <h4><i class="ri-map-pin-line"></i> 570 8th Ave, Gomtinagar, Lucknow</h4>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderStatus