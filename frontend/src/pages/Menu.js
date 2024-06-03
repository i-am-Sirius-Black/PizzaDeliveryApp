import React, { useContext, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Stack,
  ButtonGroup,
  Divider,
  Text,
  Heading,
  Box,
  Container,
} from "@chakra-ui/react";
import {PizzaContext} from '../context/PizzaContext'
import pizza1 from "../assets/images/05.png";
import pizza2 from "../assets/images/04.png";
import pizza3 from "../assets/images/05.png";
import BuyPizza from "../components/Modals/BuyPizza";


function Menu() {
  const {pizzas} = useContext(PizzaContext);

  console.log("fething menu...pizzza ", pizzas);

  const menu = [
    {
      imgSrc: pizza1,
      title: "Pepperoni Pizza",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "₹120",
    },
    {
      imgSrc: pizza2,
      title: "Margherita Pizza",
      description: "Sed do eiusmod tempor incididunt ut labore et.",
      price: "₹140",
    },
    {
      imgSrc: pizza3,
      title: "BBQ Chicken Pizza",
      description: "Ut enim ad minim veniam, quis nostru ullamco laboris.",
      price: "₹190",
    },
    ,
    {
      imgSrc: pizza3,
      title: "Corn Paneer Pizza",
      description: "Ut enim ad minim veniam, quis nostru ullamco laboris.",
      price: "₹199",
    },
    ,
    {
      imgSrc: pizza3,
      title: "Corn Paneer Pizza",
      description: "Ut enim ad minim veniam, quis nostru ullamco laboris.",
      price: "₹220",
    },
    ,
    {
      imgSrc: pizza3,
      title: "Corn Paneer Pizza",
      description: "Ut enim ad minim veniam, quis nostru ullamco laboris.",
      price: "₹210",
    },
    ,
    {
      imgSrc: pizza3,
      title: "Corn Paneer Pizza",
      description: "Ut enim ad minim veniam, quis nostru ullamco laboris.",
      price: "₹149",
    },
    ,
    {
      imgSrc: pizza3,
      title: "BBQ Chicken Pizza",
      description: "Ut enim ad minim veniam, quis nostru ullamco laboris.",
      price: "₹179",
    },
  ];
  
  return (
    <>
    <Box as="section" p={8} bg="#FFF5EC">
      <Heading
        as="h1"
        textAlign="center"
        fontWeight="black"
        fontSize="6xl"
        pb="5"
        color="#FFBC0D"
        fontFamily="sans-serif"
      >
        Popular Pizza's
      </Heading>
      <Container maxW="container.xl" mt={4} mb={8}>
        <Box display="flex" flexWrap="wrap" gap={8} justifyContent="center">
          {pizzas.map((pizza, index) => (
            <Card
              key={index}
              width={{ base: "100%", sm: "45%", md: "30%", lg: "22%" }}
              maxW="xs"
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <CardBody p={0} className="bg-[#F28739]">
                <Image
                  src={pizza1}
                  alt={pizza.pizzaName}
                  objectFit="cover"
                  w="100%"
                  h="200px"
                />
              </CardBody>
              <CardFooter p={4} className="bg-gray-50 ">
                <Stack spacing={3}>
                  <Heading fontFamily="sans-serif" size="md" color="#D43807" className="text-center">
                    {pizza.pizzaName}
                  </Heading>
                  {/* <Text fontFamily="sans-serif" fontSize="sm" color="gray.600" className="text-center">
                    {pizza.description}
                  </Text> */}
                  <Divider />
                 
                  <ButtonGroup
                    fontFamily="sans-serif"
                    spacing={1}
                    className="w-full flex items-center justify-between"
                  >
                   <Text fontWeight="bold" color="green.500" fontSize="lg">
                      {pizza.price}
                    </Text>
              
                    <button 
                    class="font-bold bg-[#D43807] text-white hover:bg-[#c43003] hover:shadow py-2 px-4 rounded text-sm ml-2"
                    data-bs-toggle="modal" 
                    data-bs-target="#pizzaBuyModel"
                    >
                      Order Now
                    </button>
                  </ButtonGroup>
                </Stack>
              </CardFooter>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>

    <BuyPizza/>
    </>
  );
}

export default Menu;
