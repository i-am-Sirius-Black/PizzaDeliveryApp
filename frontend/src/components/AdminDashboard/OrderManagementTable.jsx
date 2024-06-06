// import React, { useEffect, useState } from 'react';
// import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
// import Cookies from 'js-cookie';
// import axios from 'axios';

// function OrderManagementTable() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [orderData, setOrderData] = useState(null);

//  const token = Cookies.get('token');

//  useEffect(() => {
//     const fetchOrderData = async () => {
//       try {
//         if (!token) {
//           console.log("Token not found, not logged in?");
//           return;
//         }
//         const response = await axios.get('http://localhost:5000/api/getAllOrders', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const orderDataResponse = response.data.data;
//       console.log("orderTable DAta: ", orderDataResponse);
//       setOrderData(orderDataResponse);
//       } catch (error) {
//         console.error("Error fetching order data:", error);
//       }
//     }
//     fetchOrderData();
// },[token]);

// if (!orderData) {
//   return <div>Loading...</div>;
// }

//   return (
//     <div className="container w-full border-1 border-zinc-200 rounded-[5px] my-10 shadow">
//       <h1 className="text-3xl text-center font-semibold text-zinc-700 alpha-font py-2">Orders Management</h1>
//       <hr />
//       <div className="flex flex-col">
//         <div className="overflow-x-auto">
//           <div className="min-w-full inline-block align-middle">
//             <div className="relative text-gray-500 focus-within:text-gray-900 mb-4"></div>
//             <div className="overflow-hidden">
//               <table className="min-w-full rounded-xl">
//                 <thead>
//                   <tr className="bg-gray-50">
//                     <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Order ID</th>
//                     <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Customer Name</th>
//                     <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">qty</th>
//                     <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Price</th>
//                     <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Status</th>
//                     <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-300">
//                 {orderData && orderData.map((order, index) => (
//                   <tr className="bg-white">
//                     <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">#{order._id}</td>
//                     <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{order.user.name}</td>
//                     <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">1</td>
//                     <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">₹{order.amount}</td>
//                     <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{order.status}</td>
//                     <td className="px-5 py-4">
//                       <div className="flex text-xs font-bold items-center gap-1">
//                         <button className="bg-green-400 group transition-all duration-500 p-2 rounded-sm flex item-center text-white hover:bg-green-500">
//                           Update
//                         </button>

//                         <Modal onClose={onClose} isOpen={isOpen} isCentered>
//                           <ModalOverlay />
//                           <ModalContent>
//                             <ModalHeader>View Order Details</ModalHeader>
//                             <ModalCloseButton />
//                             <ModalBody>
//                               <table>
//                                 <tbody>
//                                   <tr>
//                                     <th className="pr-4">Pizza:</th>
//                                     <td>{order.pizza.pizzaName}</td>
//                                   </tr>
//                                   <tr className='bg-zinc-200'>
//                                     <th className="pr-4">Base:</th>
//                                     <td>{order.customizations.base}</td>
//                                   </tr>
//                                   <tr>
//                                     <th className="pr-4">Sauce:</th>
//                                     <td>{order.customizations.sauce}</td>
//                                   </tr>
//                                   <tr className='bg-zinc-200'>
//                                     <th className="pr-4">Cheese:</th>
//                                     <td>{order.customizations.cheese}</td>
//                                   </tr>
//                                   <tr>
//                                     <th className="pr-4 py-2">Veggies:</th>
//                                     <td className='py-2'>{(order.customizations.veggies).join(", ")}</td>
//                                   </tr>
//                                   <tr className='bg-zinc-200'>
//                                     <th className="pr-4 white-space">Address:</th>
//                                     <td>{order.address}</td>
//                                   </tr>
//                                   <tr>
//                                     <th className="pr-4 py-2">Paid:</th>
//                                     <td className='py-2 font-bold text-green-400'>₹{order.amount}</td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </ModalBody>
//                             <Button onClick={onClose}>Close</Button>
//                           </ModalContent>
//                         </Modal>
//                         <button onClick={onOpen} className="group bg-zinc-300 p-2 rounded-sm transition-all duration-500 flex item-center hover:text-red-700">
//                           View Order
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderManagementTable;

import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import axios from "axios";

function OrderManagementTable() {
  // const [value, setValue] = useState('');
  const {
    isOpen: isOrderOpen,
    onOpen: onOrderOpen,
    onClose: onOrderClose,
  } = useDisclosure();
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();
  const [orderData, setOrderData] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState(""); 

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        if (!token) {
          console.log("Token not found, not logged in?");
          return;
        }
        const response = await axios.get(
          "http://localhost:5000/api/getAllOrders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const orderDataResponse = response.data.data;
        // console.log("orderTable Data: ", orderDataResponse);
        setOrderData(orderDataResponse);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };
    fetchOrderData();
  }, [token]);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    onOrderOpen();
  };

  const handleUpdateOrder = (order) => {
    setSelectedOrder(order);
    onUpdateOpen();
  };

  const handleStatusChange = async (value) => {
    setNewStatus(value);
    console.log("onStatusChange: " + value);
    try {
      await axios.put(
        `http://localhost:5000/api/updateOrderStatus/${selectedOrder._id}`,
        { status: value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update the orderData state to reflect the new status
      setOrderData((prevOrderData) =>
        prevOrderData.map((order) =>
          order._id === selectedOrder._id ? { ...order, status: value } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="container w-full border-1 border-zinc-200 rounded-[5px] my-10 shadow">
      <h1 className="text-3xl text-center font-semibold text-zinc-700 alpha-font py-2">
        Orders Management
      </h1>
      <hr />
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="relative text-gray-500 focus-within:text-gray-900 mb-4"></div>
            <div className="overflow-hidden">
              <table className="min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">
                      Order ID
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Customer Name
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">
                      qty
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Price
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Status
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {orderData &&
                    orderData.map((order, index) => (
                      <tr className="bg-white" key={index}>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          #{order._id}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          {order.user.name}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          1
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          ₹{order.amount}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          {order.status}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex text-xs font-bold items-center gap-1">
                            <button
                              onClick={() => handleUpdateOrder(order)}
                              className="bg-green-400 group transition-all duration-500 p-2 px-3 rounded-sm flex item-center text-white hover:bg-green-500"
                            >
                              Update
                            </button>

                            <button
                              onClick={() => handleViewOrder(order)}
                              className="group bg-zinc-300 p-2 rounded-sm transition-all duration-500 flex item-center hover:text-red-700"
                            >
                              View Order
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {/* View Order Modal */}
              {selectedOrder && (
                <Modal onClose={onOrderClose} isOpen={isOrderOpen} isCentered>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>View Order Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <table>
                        <tbody>
                          <tr>
                            <th className="pr-4">Pizza:</th>
                            <td>{selectedOrder.pizza.pizzaName}</td>
                          </tr>
                          <tr className="bg-zinc-200">
                            <th className="pr-4">Base:</th>
                            <td>{selectedOrder.customizations.base}</td>
                          </tr>
                          <tr>
                            <th className="pr-4">Sauce:</th>
                            <td>{selectedOrder.customizations.sauce}</td>
                          </tr>
                          <tr className="bg-zinc-200">
                            <th className="pr-4">Cheese:</th>
                            <td>{selectedOrder.customizations.cheese}</td>
                          </tr>
                          <tr>
                            <th className="pr-4 py-2">Veggies:</th>
                            <td className="py-2">
                              {selectedOrder.customizations.veggies.join(", ")}
                            </td>
                          </tr>
                          <tr className="bg-zinc-200">
                            <th className="pr-4 white-space">Address:</th>
                            <td>{selectedOrder.address}</td>
                          </tr>
                          <tr>
                            <th className="pr-4 py-2">Paid:</th>
                            <td className="py-2 font-bold text-green-400">
                              ₹{selectedOrder.amount}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </ModalBody>
                    <Button onClick={onOrderClose}>Close</Button>
                  </ModalContent>
                </Modal>
              )}

              {/* Update Order Modal */}
              <Modal onClose={onUpdateClose} isOpen={isUpdateOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Order Status</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <div className="payment-mode p-3 ">
                      <RadioGroup onChange={handleStatusChange}>
                        <Stack direction="row">
                          <Radio colorScheme='red' value="In the Kitchen">In the Kitchen</Radio>
                          <Radio colorScheme='orange' value="Out for Delivery">Out for Delivery</Radio>
                          <Radio colorScheme='green' value="Delivered">Delivered</Radio>
                        </Stack>
                      </RadioGroup>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onUpdateClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagementTable;
