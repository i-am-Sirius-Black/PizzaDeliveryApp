import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';

function OrderManagementTable() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="container w-2/3 border-1 border-zinc-200 rounded-[5px] my-10 shadow">
      <h1 className="text-3xl text-center font-semibold text-zinc-700 alpha-font py-2">Orders Management</h1>
      <hr />
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="relative text-gray-500 focus-within:text-gray-900 mb-4"></div>
            <div className="overflow-hidden">
              <table className="min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Order ID</th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Customer Name</th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Items Ordered</th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Price</th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Status</th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">#12345</td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">John Dock</td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">3 items</td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">₹660</td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">Received</td>
                    <td className="px-5 py-4">
                      <div className="flex text-xs font-bold items-center gap-1">
                        <button className="bg-green-300 group transition-all duration-500 px-1 flex item-center text-green-700 hover:text-blue-700">
                          Update
                        </button>
                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>View Order Details</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <table>
                                <tbody>
                                  <tr>
                                    <th className="pr-4">OrderID:</th>
                                    <td>#12345</td>
                                  </tr>
                                  <tr>
                                    <th className="pr-4">CustomerName:</th>
                                    <td>John Doe</td>
                                  </tr>
                                  <tr>
                                    <th className="pr-4">ItemsOrdered:</th>
                                    <td>PaneerPizza, CheesePizza</td>
                                  </tr>
                                  <tr>
                                    <th className="pr-4">DeliveryAddress:</th>
                                    <td>120/43B Indra Nagar, Lucknow</td>
                                  </tr>
                                  <tr>
                                    <th className="pr-4">TotalPrice:</th>
                                    <td>₹910</td>
                                  </tr>
                                </tbody>
                              </table>
                            </ModalBody>
                            <Button onClick={onClose}>Close</Button>
                          </ModalContent>
                        </Modal>
                        <button onClick={onOpen} className="group transition-all duration-500 flex item-center text-red-500 hover:text-red-700">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagementTable;
