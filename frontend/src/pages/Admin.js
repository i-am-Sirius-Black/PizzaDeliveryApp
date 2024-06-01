
import React from 'react';
import AddItemForm from '../components/AdminDashboard/AddItemForm';
import InventoryTable from '../components/AdminDashboard/InventoryTable';
import OrderManagementTable from '../components/AdminDashboard/OrderManagementTable';

function Admin() {
  return (
    <section className="w-full">
        <AddItemForm />
      <InventoryTable />
      <OrderManagementTable />
    </section>
  );
}

export default Admin;
