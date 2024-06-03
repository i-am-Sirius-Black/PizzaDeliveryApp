import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [inventory, setInventory] = useState([]);

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/pizza", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPizzas(response.data.data);
      } catch (error) {
        console.error("Failed to fetch pizzas:", error);
      }
    };
    fetchPizzas();
  }, [token]);

  const addPizza = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/pizza",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPizzas((prevPizzas) => [...prevPizzas, response.data.data]);
    } catch (error) {
      console.error("Failed to add pizza:", error);
    }
  };

  const editPizza = async (formData) => {
    const { _id } = formData;
    try {
      const response = await axios.put(
        `http://localhost:5000/api/pizza/${_id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedPizza = response.data.data;
      setPizzas((prevPizzas) =>
        prevPizzas.map((pizza) => (pizza._id === _id ? updatedPizza : pizza))
      );
    } catch (error) {
      console.error("Failed to edit pizza:", error);
    }
  };

  const deletePizza = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/pizza/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPizzas((prevPizzas) => prevPizzas.filter((pizza) => pizza._id !== id));
    } catch (error) {
      console.error("Failed to delete the pizza:", error);
    }
  };


  //Inventory 

  useEffect(()=>{

    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/inventory", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInventory(response.data.data);
      } catch (error) {
        console.error("Failed to fetch pizzas:", error);
      }
    };
    fetchInventory();

  },[token]);


  const editInventory = async (formData) => {
    const {_id}=formData;
    try {
      const response = await axios.put(
        `http://localhost:5000/api/inventory`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedInventory = response.data.data;
      setInventory((prevInventory) =>
        prevInventory.map((item) => (item._id === _id ? updatedInventory : item))
      );
    } catch (error) {
      console.error("Failed to edit pizza:", error);
    }
  };


  const deleteInventory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/inventory/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInventory((prevInventory) => prevInventory.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Failed to delete the pizza:", error);
    }
  };



  return (
    <PizzaContext.Provider value={{ pizzas, addPizza, editPizza, deletePizza, inventory,  editInventory, deleteInventory }}>
      {children}
    </PizzaContext.Provider>
  );
};
