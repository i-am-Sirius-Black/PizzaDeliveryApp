import React, { useContext, useState } from "react";
import { PizzaContext } from "../../context/PizzaContext";
import Modal from "../Modal";

function InventoryTable() {
  const { inventory, deleteInventory, editInventory } = useContext(PizzaContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    _id:"",
    type:"",
    item: "",
    quantity: "",
    price: "",
  });

  const handleEdit = (itemData) => {
    console.log("item: ",itemData);
    setFormData(itemData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      _id:"",
      type:"",
      item: "",
      quantity: "",
      price: "",
    });
  };

  const handleInputChange = (e) => {
    const {name, value  } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editInventory(formData);
    handleCloseModal();
  };

  const handleDelete = (id) => {
    deleteInventory(id);
  };

  return (
    <div className="container w-2/3 border-1 border-zinc-200 rounded-[5px] shadow my-10">
      <h1 className="text-3xl text-center font-semibold text-zinc-700 alpha-font py-2">
        Inventory Table
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
                    <th className="p-5 text-left text-sm font-semibold text-blue-500 capitalize rounded-t-xl">
                      Name
                    </th>
                    <th className="p-5 text-left text-sm font-semibold text-orange-500 capitalize rounded-t-xl">
                      Type:
                    </th>
                    {/* <th className="p-5 text-left text-sm font-semibold text-gray-900 capitalize">Type</th> */}
                    <th className="p-5 text-left text-sm font-semibold text-green-600 capitalize">
                      ₹Price
                    </th>
                    <th className="p-5 text-left text-sm font-semibold text-gray-900 capitalize">
                      Stock Quantity
                    </th>
                    <th className="p-5 text-left text-sm font-semibold text-gray-900 capitalize rounded-t-xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {inventory.map((item, index) => (
                    <tr
                      key={item._id}
                      className="bg-white transition-all duration-500 hover:bg-gray-50 capitalize"
                    >
                      <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.item}
                      </td>
                      <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                      <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        ₹{item.price}
                      </td>
                      <td className="px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.quantity <= 5
                          ? `${item.quantity} (Low)`
                          : item.quantity}
                      </td>
                      <td className="px-5 py-2">
                        <div className="flex items-center gap-1">
                          <button
                            className="inventory-edit p-2 rounded-full group transition-all duration-500 flex item-center text-blue-500 hover:text-blue-700"
                            onClick={() => handleEdit(item)}
                          >
                            <i className="ri-edit-box-line"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="inventory-delete p-2 rounded-full group transition-all duration-500 flex item-center text-red-500 hover:text-red-700"
                          >
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 bg-white rounded shadow-lg"
        >
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700"
          >Item:</label>
          <input
            type="text"
            id="item"
            name="item"
            value={formData.item}
            onChange={handleInputChange}
            placeholder="item:"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="qty:"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="₹:"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <div className="pt-5">
            <div className="flex justify-between">
              <a
                onClick={handleCloseModal}
                className="btn ml-3 inline-flex items-center justify-center py-2 px-4 border  shadow-sm text-sm font-bold rounded-md text-white bg-red-500 hover:bg-red-600 hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close{" "}
                <span className="pl-2">
                  <i class="ri-close-large-line"></i>
                </span>
              </a>

              <button
                type="submit"
                className="ml-3 inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="text-lg pr-2">
                  <i class="ri-save-line"></i>
                </span>
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default InventoryTable;
