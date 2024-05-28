import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, FormHelperText } from "@chakra-ui/react";
import { Form } from "react-router-dom";

function Register() {
  return (
    <Flex className="min-h-screen">
      {/* Left Section (Image) */}
      <Box className="left-image w-1/2 flex items-center justify-center py-12 px-8">
        {/* <img src="your-image-url.jpg" alt="Registration" className="max-w-xs w-full" /> */}
      </Box>

      {/* Right Section (Registration Form) */}
      <Box className="w-1/2 flex items-center justify-center py-12 px-8">
        <Box className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <Heading as="h2" size="xl" className="text-center mb-6 font-bold text-teal-600">Create an account</Heading>
          <Form action="/register" method="post">
            <FormControl isRequired className="mb-4">
              <FormLabel className="text-sm font-semibold text-gray-600">Full Name</FormLabel>
              <Input type="text" placeholder="Full name" />
            </FormControl>
            <FormControl isRequired className="mb-4">
              <FormLabel className="text-sm font-semibold text-gray-600">Email</FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl isRequired className="mb-4">
              <FormLabel className="text-sm font-semibold text-gray-600">Password</FormLabel>
              <Input type="password" placeholder="Password" />
              <FormHelperText className="text-xs text-gray-400">Password must be at least 8 characters</FormHelperText>
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold"
            >
              Register
            </Button>
          </Form>
          <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="/login" className="text-teal-600 hover:text-teal-500 font-semibold">Sign in</a></p>
        </Box>
      </Box>
    </Flex>
  );
}

export default Register;
