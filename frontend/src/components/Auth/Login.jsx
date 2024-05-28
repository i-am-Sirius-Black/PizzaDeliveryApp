import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, FormHelperText } from "@chakra-ui/react";
import { Form } from "react-router-dom";

function Login() {
  return (
    <Flex className="min-h-screen">
      {/* Left Section (Image) */}
      <div className="left-image w-1/2 flex items-center justify-center py-12 px-8">
      </div>

      {/* Right Section (Registration Form) */}
      <Box className="w-1/2 flex items-center justify-center py-12 px-8">
        <Box className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <Heading as="h2" size="xl" className="text-center mb-6 font-bold">Login</Heading>
          <Form action="/login" method="post">
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
              colorScheme="blue"
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold"
            >
              Login
            </Button>
          </Form>
          <p className="mt-6 text-center text-sm text-gray-600">Don't have account? <a href="/register" className="text-teal-600 hover:text-teal-500 font-semibold">Sign up</a></p>
        </Box>
      </Box>
    </Flex>
  );
}

export default Login;
