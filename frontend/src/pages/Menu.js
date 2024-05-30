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
  ChakraProvider,
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
    // <section className="py-10">
    //   <div className="container">
    //   <div className="order-pizza flex gap-8">
    //     {menu.map((item, index)=>(
    //       <div className="card w-1/4" key={index}>
    //       <div className="card-body">
    //         <img
    //           className="w-1/2"
    //           src={item.imgSrc}
    //           alt="pizza-menu"
    //         />
    //         <div >
    //           <h1 className="text-xl">{item.title}</h1>
    //           <p>
    //             {item.description}
    //           </p>
    //           <h4 >
    //             {item.price}
    //           </h4>
    //         </div>
    //       </div>
    //       <hr />
    //       <div className="card-foot">
    //         <div className="btn-grp" spacing="2">
    //           <button >
    //             Order now
    //           </button>
    //           <button>
    //             Add to cart
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     ))}
    //   </div>
    //   </div>
    // </section>

      <Box className="mb-5 bg-[#FAFAFA]" as="section" p={4}>
        <h1 className="text-center font-black text-6xl py-4 text-[#29361A] barlow-font text-[#29361A]">Standout Pizzas</h1>
        <Container maxW="container" className="mt-2">
          <Box display="flex" flexWrap="wrap" gap={8} justifyContent="center" className="">
            {menu.map((item, index) => ( 
              <Card className="transform transition-transform duration-300 hover:scale-105" key={index} width="15%" maxW="xs" borderRadius="2xl">
                <CardBody className="p-0 flex flex-col items-center text-center text-white rounded-t-lg bg-zinc-700 text-white">
                  <Image src={item.imgSrc} alt={item.title} width="60%" maxW="" className="rounded-full"/>
                  
                </CardBody>
                <Divider />
                <CardFooter className="flex flex-col">
                <Stack className="text-left" mt="2" mb="2" spacing="3">
                    <Heading size="sm">{item.title}</Heading>
                    <Text fontSize="xs">{item.description}</Text>
                </Stack>
                  <ButtonGroup spacing="10" className="w-full flex items-center justify-between">
                  <Text className="font-bold" color="red.600" fontSize="lg">
                      {item.price}
                    </Text>
                    <Button className="border-[1px] border-red-200" variant="ghost" colorScheme="red">
                      Buy
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

  );
}

export default Menu;
