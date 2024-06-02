import React, { useEffect, useState } from "react";
import AddPizza from "./AddPizza";
import PizzasTable from "./PizzasTable";
import axios from "axios";
import Cookies from "js-cookie";

function Pizza() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/pizza");
        console.log('Fetched pizzas:', response.data.data);
        setPizzas(response.data.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch pizzas:", error);
      }
    };
    fetchPizzas();
  }, []); 


  const editPizza = (id) => {
    // Handle edit pizza logic here
  };

  const deletePizza = async(id) => {

    try {
      await axios.delete(`http://localhost:5000/api/pizza/${id}`);
      // setPizzas(pizzas.filter((pizza) => pizza._id !== id));
      setPizzas((prevPizzas) => prevPizzas.filter((pizza) => pizza._id !== id));
    } catch (error) {
      console.error("Failed to delete the pizza:", error);
    }
  };

  const addPizzaToState = (newPizza) => {
    setPizzas((prevPizzas) => [...prevPizzas, newPizza]);
  };

  return (
    <>
      <div className="bg-zinc-100">
       <PizzasTable
        pizzas={pizzas}
        editPizza={editPizza}
        deletePizza={deletePizza}
      />
      <AddPizza addPizza={addPizzaToState}/>
      </div>
    </>
  );
}

export default Pizza;
