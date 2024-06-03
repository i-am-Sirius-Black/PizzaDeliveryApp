

import React, { useContext } from "react";
import AddPizza from "./AddPizza";
import PizzasTable from "./PizzasTable";
import { PizzaContext } from "../../context/PizzaContext";

const Pizza = () => {
  const { pizzas, addPizza, editPizza, deletePizza } = useContext(PizzaContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pizza Management</h1>
      <AddPizza addPizza={addPizza} />
      <PizzasTable pizzas={pizzas} editPizza={editPizza} deletePizza={deletePizza} />
    </div>
  );
};

export default Pizza;
;

