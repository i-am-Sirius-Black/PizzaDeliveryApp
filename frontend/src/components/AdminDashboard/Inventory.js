import React, { useContext } from 'react'
import AddItemForm from './AddItemForm'
import InventoryTable from './InventoryTable'


function Inventory() {
 
  return (
    <>
    <AddItemForm />
    <InventoryTable/>
    </>
  )
}

export default Inventory