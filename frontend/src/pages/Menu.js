


import React, { useContext, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Stack,
  Divider,
  Text,
  Heading,
  Box,
  Container,
} from "@chakra-ui/react";
import { PizzaContext } from "../context/PizzaContext";
import pizza1 from "../assets/images/05.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Menu() {
  const { pizzas } = useContext(PizzaContext);
  const navigate = useNavigate(); 

  const handleCustomizeClick = (pizza) => {
    navigate("/customize-pizza", { state: { pizza } }); 
  };

  const handleOrderClick = (pizza) => {
    navigate("/cart", { state: { pizza } });
  };

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
          <Box
            display="flex"
            flexWrap="wrap"
            gap={8}
            justifyContent="center"
          >
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
                    src={pizza1} // You might want to change this to use dynamic image based on pizza
                    alt={pizza.pizzaName}
                    objectFit="cover"
                    w="100%"
                    h="200px"
                  />
                </CardBody>
                <CardFooter p={4} className="bg-gray-50 ">
                  <Stack spacing={3}>
                    <Heading
                      fontFamily="sans-serif"
                      size="md"
                      color="#D43807"
                      className="text-center"
                    >
                      {pizza.pizzaName}
                    </Heading>
                    <Text
                      fontFamily="sans-serif"
                      fontSize="sm"
                      color="gray.600"
                      className="text-center"
                    >
                      {pizza.description}
                    </Text>
                    <Divider />

                    <div className="card-footer flex items-center">
                      <Text fontWeight="bold" color="green.500" fontSize="lg">
                        ₹{pizza.price}
                      </Text>

                      <div className="btn-grp flex">
                        <Button
                          type="button"
                          colorScheme="orange"
                          onClick={() => handleCustomizeClick(pizza)}
                        >
                          Customize
                        </Button>
                        <Button
                          colorScheme="blue"
                          onClick={() => handleOrderClick(pizza)}
                        >
                          Order
                        </Button>
                      </div>
                    </div>
                  </Stack>
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Menu;
