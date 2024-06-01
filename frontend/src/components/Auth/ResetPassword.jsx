import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, FormHelperText, Text } from "@chakra-ui/react";

function ResetPassword() {
  const { resetToken } = useParams();
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:5000/api/auth/resetpassword/${resetToken}`, { password });
      
      setMessage('Password reset successfully');
      navigate('/login');
    } catch (error) {
      setError('Failed to reset password');
    }
  };

  return (
    <Flex className="min-h-screen" align="center" justify="center">
      <Box className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <Heading as="h2" size="xl" className="text-center mb-6 font-bold">Reset Password</Heading>
        {message && <Text color="green.500" mb={4}>{message}</Text>}
        {error && <Text color="red.500" mb={4}>{error}</Text>}
        <form onSubmit={handleSubmit}>
          <FormControl isRequired className="mb-4">
            <FormLabel className="text-sm font-semibold text-gray-600">New Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
            <FormHelperText className="text-xs text-gray-400">Password must be at least 8 characters</FormHelperText>
          </FormControl>
          <FormControl isRequired className="mb-4">
            <FormLabel className="text-sm font-semibold text-gray-600">Confirm Password</FormLabel>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold"
          >
            Reset Password
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default ResetPassword;
