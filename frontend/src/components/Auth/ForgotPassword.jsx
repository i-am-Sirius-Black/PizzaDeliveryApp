import React, { useState } from 'react';
import axios from 'axios';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

    const frontendHost = window.location.host;
    const baseResetUrl = `http://${frontendHost}/resetpassword`;

      const respo̥nse = await axios.post('http://localhost:5000/api/auth/forgotpassword', { email, baseResetUrl });
      console.log("🚀 ~ handleSubmit ~ respo̥nse:", respo̥nse)
      
      setMessage('Password reset link sent to your email');
    } catch (error) {
      setError('Failed to send password reset link');
    }
  };

  return (
    <Flex className="min-h-screen" align="center" justify="center">
      <Box className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <Heading as="h2" size="xl" className="text-center mb-6 font-bold">Forgot Password</Heading>
        {message && <Text color="green.500" mb={4}>{message}</Text>}
        {error && <Text color="red.500" mb={4}>{error}</Text>}
        <form onSubmit={handleSubmit}>
          <FormControl isRequired className="mb-4">
            <FormLabel className="text-sm font-semibold text-gray-600">Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold"
          >
            Send Reset Link
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default ForgotPassword;
