import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";



function OrderDetails() {
  return (
    <section className="order-details py-1">
      <div className='container'>
        <div className="w-1/2 flex flex-col border">
          <div className="order-heading px-1 py-4">
            <h1>Order Details</h1>
          </div>
          <hr />
          <div className="details">
            <TableContainer>
              <Table variant='striped' colorScheme='gray'>
                {/* <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption> */}
                <Thead>
                  <Tr>
                    <Th>Customizations</Th>
                    <Th>Selections</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Pizza</Td>
                    <Td>Margherita</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>Sauce</Td>
                    <Td>Pepperoni</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>Cheese</Td>
                    <Td>Margherita</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>Veggies</Td>
                    <Td>Pepperoni</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </div>
        </div>
        </div>
      </section>
  );
}

export default OrderDetails;
