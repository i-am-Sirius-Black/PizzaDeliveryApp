import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function Admin() {
  const rowData = [
    {
      name: "Classic Thin Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    ,
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    ,
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    ,
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    ,
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    ,
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    ,
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    ,
    {
      name: "Whole Wheat Crust",
      type: "Base",
      price: "₹120",
      stockQuantity: 9,
    },
    
  ];

  return (
    <section className="w-full">
      <div className="container w-2/3 h-[70vh] border-1 border-zinc-200 rounded-[5px] my-10">
        <h1 className="alpha-font text-4xl text-center mb-2">
          Inventory Management
        </h1>
        <hr />
        <h2 className="text-2xl font-semibold text-zinc-700 alpha-font">
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
            <FormLabel>Type</FormLabel>
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
                <div class="relative  text-gray-500 focus-within:text-gray-900 mb-4">
                  
                </div>
                <div class="overflow-hidden ">
                  <table class=" min-w-full rounded-xl">
                    <thead>
                      <tr class="bg-gray-50">
                        <th
                          scope="col"
                          class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                        >
                          {" "}
                          Name{" "}
                        </th>
                        <th
                          scope="col"
                          class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          {" "}
                          Type{" "}
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
                          Stock Quantity{" "}
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
                      {/* Map over data array and render table rows */}
                      {rowData.map((item, index) => (
                        <tr
                          key={index}
                          className="bg-white transition-all duration-500 hover:bg-gray-50"
                        >
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {item.name}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {item.type}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {item.price}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {item.stockQuantity}
                          </td>
                          <td className="p-5">
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
    </section>
  );
}

export default Admin;
