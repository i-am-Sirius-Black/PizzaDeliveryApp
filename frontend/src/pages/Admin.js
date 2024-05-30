import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function Admin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [rowData, setRowData] = useState([
    {
      name: "Classic Thin Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹140",
      stockQuantity: 12,
    },
    {
      name: "Gluten-Free Crust",
      type: "Base",
      price: "₹160",
      stockQuantity: 8,
    },
    {
      name: "Cheese Stuffed Crust",
      type: "Base",
      price: "₹180",
      stockQuantity: 5,
    },
    {
      name: "Garlic Herb Crust",
      type: "Base",
      price: "₹150",
      stockQuantity: 7,
    },
    {
      name: "Crispy Thin Crust",
      type: "Base",
      price: "₹130",
      stockQuantity: 10,
    },
    {
      name: "Cauliflower Crust",
      type: "Base",
      price: "₹200",
      stockQuantity: 4,
    },
    {
      name: "Flatbread Crust",
      type: "Base",
      price: "₹110",
      stockQuantity: 11,
    },
    {
      name: "Sourdough Crust",
      type: "Base",
      price: "₹170",
      stockQuantity: 6,
    },
    {
      name: "Cornmeal Crust",
      type: "Base",
      price: "₹125",
      stockQuantity: 15,
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleSaveClick = (index) => {
    setEditingIndex(null);
    // Handle saving data to your backend or state management here
  };

  const handleInputChange = (index, key, value) => {
    const updatedData = [...rowData];
    updatedData[index][key] = value;
    setRowData(updatedData);
  };

  // const rowData = [
  //   {
  //     name: "Classic Thin Crust",
  //     type: "Base",
  //     price: "₹120",
  //     stockQuantity: 9,
  //   },
  //   {
  //     name: "Whole Wheat Crust",
  //     type: "Base",
  //     price: "₹140",
  //     stockQuantity: 12,
  //   },
  //   {
  //     name: "Gluten-Free Crust",
  //     type: "Base",
  //     price: "₹160",
  //     stockQuantity: 8,
  //   },
  //   {
  //     name: "Cheese Stuffed Crust",
  //     type: "Base",
  //     price: "₹180",
  //     stockQuantity: 5,
  //   },
  //   {
  //     name: "Garlic Herb Crust",
  //     type: "Base",
  //     price: "₹150",
  //     stockQuantity: 7,
  //   },
  //   {
  //     name: "Crispy Thin Crust",
  //     type: "Base",
  //     price: "₹130",
  //     stockQuantity: 10,
  //   },
  //   {
  //     name: "Cauliflower Crust",
  //     type: "Base",
  //     price: "₹200",
  //     stockQuantity: 4,
  //   },
  //   {
  //     name: "Flatbread Crust",
  //     type: "Base",
  //     price: "₹110",
  //     stockQuantity: 11,
  //   },
  //   {
  //     name: "Sourdough Crust",
  //     type: "Base",
  //     price: "₹170",
  //     stockQuantity: 6,
  //   },
  //   {
  //     name: "Cornmeal Crust",
  //     type: "Base",
  //     price: "₹125",
  //     stockQuantity: 15,
  //   },
  // ];

  return (
    <section className="w-full">
      <div className="container w-2/3 h-[75vh] border-1 border-zinc-200 rounded-[5px] my-10">
      <h1 className="alpha-font text-4xl text-center  bg-zinc-200 w-full">
          Inventory Management
        </h1>
        <h2 className="text-2xl font-semibold text-zinc-700 alpha-font py-3">
          Add New Item
        </h2>
        <hr />
        <div>
          <FormControl className="py-2">
            <FormLabel>Name</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl className="py-2">
            <FormLabel>Type</FormLabel>
            <Select placeholder="Select Type">
              <option>Pizza-Base</option>
              <option>Sauce</option>
              <option>Cheese</option>
              <option>Veggie</option>
            </Select>
          </FormControl>

          <FormControl className="py-2">
            <FormLabel>Price ₹</FormLabel>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl className="py-2">
            <FormLabel>Stock Quantity:</FormLabel>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button colorScheme="blue">Add Item</Button>
        </div>
      </div>

      <div className="container w-2/3  border-1 border-zinc-200 rounded-[5px] my-10">
        <h1 className="alpha-font text-4xl text-center mb-2">
          Inventory Table
        </h1>
        <hr />
        <div>
          <div class="flex flex-col">
            <div class=" overflow-x-auto">
              <div class="min-w-full inline-block align-middle">
                <div class="relative  text-gray-500 focus-within:text-gray-900 mb-4"></div>
                <div class="overflow-hidden ">
                  <table class=" min-w-full rounded-xl">
                    <thead>
                      <tr class="bg-gray-50">
                        <th
                          scope="col"
                          class="p-5 text-left text-sm font-semibold text-gray-900 capitalize rounded-t-xl"
                        >
                          {" "}
                          Name{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm font-semibold text-gray-900 capitalize"
                        >
                          {" "}
                          Type{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm font-semibold text-gray-900 capitalize"
                        >
                          {" "}
                          Price{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm font-semibold text-gray-900 capitalize"
                        >
                          {" "}
                          Stock Quantity{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm font-semibold text-gray-900 capitalize rounded-t-xl"
                        >
                          {" "}
                          Actions{" "}
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300">
                    {/* Map over data array and render table rows */}
                    {rowData.map((item, index) => (
                      <tr
                        key={index}
                        className="bg-white transition-all duration-500 hover:bg-gray-50"
                      >
                        <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.name}
                        </td>
                        <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.type}
                        </td>
                        <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.price}
                        </td>
                        <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.stockQuantity <= 5
                            ? `${item.stockQuantity} (Low)`
                            : item.stockQuantity}
                        </td>
                        <td className="px-5 py-2">
                          <div class="flex items-center gap-1">
                            <button class="p-2  rounded-full  group transition-all duration-500  flex item-center text-blue-500 hover:text-blue-700">
                              <i class="ri-edit-box-line"></i>
                            </button>

                            <button class="p-2 rounded-full  group transition-all duration-500  flex item-center text-red-500 hover:text-red-700">
                              <i class="ri-delete-bin-5-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-2/3  border-1 border-zinc-200 rounded-[5px] my-10">
        <h1 className="alpha-font text-4xl text-center mb-2">
          Order Management
        </h1>
        <hr />
        <h2 className="text-2xl font-semibold text-zinc-700 alpha-font">
          Orders Table
        </h2>
        <div>
          <div class="flex flex-col">
            <div class=" overflow-x-auto">
              <div class="min-w-full inline-block align-middle">
                <div class="relative  text-gray-500 focus-within:text-gray-900 mb-4"></div>
                <div class="overflow-hidden ">
                  <table class=" min-w-full rounded-xl">
                    <thead>
                      <tr class="bg-gray-50">
                        <th
                          scope="col"
                          class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                        >
                          {" "}
                          Order ID{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          {" "}
                          Cutomer Name{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          {" "}
                          Items Ordered{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          {" "}
                          Price{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          {" "}
                          Status{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                        >
                          {" "}
                          Actions{" "}
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300">
                      {/* {rowData.map((item, index) => ( */}
                      <tr className="bg-white">
                        <td className="px-5 py-4  whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          #12345
                        </td>
                        <td className="px-5 py-4  whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          JOhn DOck
                        </td>
                        <td className="px-5 py-4  whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          3 items
                        </td>
                        <td className="px-5 py-4  whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          ₹660
                        </td>
                        <td className="px-5 py-4  whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          Received
                        </td>
                        <td className="px-5 py-4 ">
                          <div class="flex text-xs font-bold items-center gap-1">
                            <button class="bg-green-300 group transition-all duration-500 px-1 flex item-center text-green-700 hover:text-blue-700">
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
                                        <th className="pr-4">
                                          DeliveryAddress:
                                        </th>
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
                            <button
                              onClick={onOpen}
                              class=" group transition-all duration-500  flex item-center text-red-500 hover:text-red-700"
                            >
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
