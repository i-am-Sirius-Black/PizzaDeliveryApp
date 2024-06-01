import React, { useState } from "react";
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

import pizza1 from "../assets/images/05.png";
import pizza2 from "../assets/images/04.png";
import pizza3 from "../assets/images/05.png";

function Menu() {

 const [isSwitched, setSwitch] = useState('true');

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

      // <Box className="mb-5 bg-[#FAFAFA]" as="section" p={4}>
      //   <h1 className="text-center font-black text-6xl py-4 text-[#29361A] barlow-font text-[#29361A]">Standout Pizzas</h1>
      //   <Container maxW="container" className="mt-2">
      //     <Box display="flex" flexWrap="wrap" gap={8} justifyContent="center" className="">
      //       {menu.map((item, index) => ( 
      //         <Card className="transform transition-transform duration-300 hover:scale-105" key={index} width="15%" maxW="xs" borderRadius="2xl">
      //           <CardBody className="p-0 flex flex-col items-center text-center text-white rounded-t-lg bg-zinc-700 text-white">
      //             <Image src={item.imgSrc} alt={item.title} width="60%" maxW="" className="rounded-full"/>
                  
      //           </CardBody>
      //           <Divider />
      //           <CardFooter className="flex flex-col">
      //           <Stack className="text-left" mt="2" mb="2" spacing="3">
      //               <Heading size="sm">{item.title}</Heading>
      //               <Text fontSize="xs">{item.description}</Text>
      //           </Stack>
      //             <ButtonGroup spacing="10" className="w-full flex items-center justify-between">
      //             <Text className="font-bold" color="red.600" fontSize="lg">
      //                 {item.price}
      //               </Text>
      //               <Button className="border-[1px] border-red-200" variant="ghost" colorScheme="red">
      //                 Buy
      //               </Button>
      //             </ButtonGroup>
      //           </CardFooter>
      //         </Card>
      //       ))}
      //     </Box>
      //   </Container>
      // </Box>

      <Box as="section" p={8} bg="#FAFAFA">
      <Heading as="h1" textAlign="center" fontWeight="bold" fontSize="4xl" py={4} color="#29361A" className="barlow-font">
        Standout Pizzas
      </Heading>
      <Container maxW="container.xl" mt={4} mb={8}>
        <Box display="flex" flexWrap="wrap" gap={8} justifyContent="center">
          {menu.map((item, index) => (
            <Card
              key={index}
              width={{ base: "100%", sm: "45%", md: "30%", lg: "22%" }}
              maxW="xs"
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <CardBody p={0} className="bg-zinc-600">
                <Image src={item.imgSrc} alt={item.title} objectFit="cover" w="100%" h="200px" />
              </CardBody>
              <CardFooter p={4} className="bg-gray-50">
                <Stack spacing={3}>
                  <Heading size="md" color="#29361A">{item.title}</Heading>
                  <Text fontSize="sm" color="gray.600">{item.description}</Text>
                  <Divider />
                  <ButtonGroup spacing={4} className="w-full flex items-center justify-between">
                    <Text fontWeight="bold" color="green.500" fontSize="lg">
                      {item.price}
                    </Text>
                    <Button variant="solid" colorScheme="yellow"  _hover={{ bg: "yellow.300" }}>
                      Buy Now
                    </Button>
                  </ButtonGroup>
                </Stack>
              </CardFooter>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Menu;
