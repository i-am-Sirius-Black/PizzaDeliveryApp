import React, { useState } from 'react';

function PizzaSelection() {
  const [base, setBase] = useState('');
  const [sauce, setSauce] = useState('');
  const [cheese, setCheese] = useState('');
  const [veggies, setVeggies] = useState([]);

  return (
    <div>
      <h2>Select Your Pizza</h2>
      <div>
        <h3>Choose Base</h3>
        {/* Add options for base */}
      </div>
      <div>
        <h3>Choose Sauce</h3>
        {/* Add options for sauce */}
      </div>
      <div>
        <h3>Choose Cheese</h3>
        {/* Add options for cheese */}
      </div>
      <div>
        <h3>Choose Veggies</h3>
        {/* Add options for veggies */}
      </div>
    </div>
  );
}

export default PizzaSelection;
