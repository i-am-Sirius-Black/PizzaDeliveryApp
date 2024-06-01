import React, { useState } from 'react';

function InventoryTable() {
  const [rowData, setRowData] = useState([
    { name: "Classic Thin Crust", type: "Base", price: "₹120", stockQuantity: 9 },
    { name: "Whole Wheat Crust", type: "Base", price: "₹140", stockQuantity: 12 },
    { name: "Gluten-Free Crust", type: "Base", price: "₹160", stockQuantity: 8 },
    { name: "Cheese Stuffed Crust", type: "Base", price: "₹180", stockQuantity: 5 },
    { name: "Garlic Herb Crust", type: "Base", price: "₹150", stockQuantity: 7 },
    { name: "Crispy Thin Crust", type: "Base", price: "₹130", stockQuantity: 10 },
    { name: "Cauliflower Crust", type: "Base", price: "₹200", stockQuantity: 4 },
    { name: "Flatbread Crust", type: "Base", price: "₹110", stockQuantity: 11 },
    { name: "Sourdough Crust", type: "Base", price: "₹170", stockQuantity: 6 },
    { name: "Cornmeal Crust", type: "Base", price: "₹125", stockQuantity: 15 },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleSaveClick = (index) => {
    setEditingIndex(null);
    // Handle saving data to your backend or state management here
  };

  return (
    <div className="container w-2/3 border-1 border-zinc-200 rounded-[5px] shadow my-10">
      <h1 className="text-3xl text-center font-semibold text-zinc-700 alpha-font py-2">Inventory Table</h1>
      <hr />
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="relative text-gray-500 focus-within:text-gray-900 mb-4"></div>
            <div className="overflow-hidden">
              <table className="min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-5 text-left text-sm font-semibold text-gray-900 capitalize rounded-t-xl">Name</th>
                    <th className="p-5 text-left text-sm font-semibold text-gray-900 capitalize">Type</th>
                    <th className="p-5 text-left text-sm font-semibold text-gray-900 capitalize">Price</th>
                    <th className="p-5 text-left text-sm font-semibold text-gray-900 capitalize">Stock Quantity</th>
                    <th className="p-5 text-left text-sm font-semibold text-gray-900 capitalize rounded-t-xl">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {rowData.map((item, index) => (
                    <tr key={index} className="bg-white transition-all duration-500 hover:bg-gray-50">
                      <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                      <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.price}</td>
                      <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.stockQuantity <= 5 ? `${item.stockQuantity} (Low)` : item.stockQuantity}</td>
                      <td className="px-5 py-2">
                        <div className="flex items-center gap-1">
                          <button className="p-2 rounded-full group transition-all duration-500 flex item-center text-blue-500 hover:text-blue-700" onClick={() => handleEditClick(index)}>
                            <i className="ri-edit-box-line"></i>
                          </button>
                          <button className="p-2 rounded-full group transition-all duration-500 flex item-center text-red-500 hover:text-red-700">
                            <i className="ri-delete-bin-5-line"></i>
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
  );
}

export default InventoryTable;
