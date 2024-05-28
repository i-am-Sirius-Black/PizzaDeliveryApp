import React from 'react';
import PizzaSelection from '../components/UserDashboard/PizzaSelection';
import OrderSummary from '../components/UserDashboard/OrderSummary';
import OrderStatus from '../components/UserDashboard/OrderStatus';

function User() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <PizzaSelection />
      <OrderSummary />
      <OrderStatus />
    </div>
  );
}

export default User;
