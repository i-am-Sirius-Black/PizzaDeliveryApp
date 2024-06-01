
import { useState, useContext } from 'react';
import axios from 'axios';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, FormHelperText, Alert } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import Cookies from 'js-cookie';
import leftImg from '../../assets/images/login.jpg';


 

function Login() {
  
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // State to store form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

    // State variables for error handling
    const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data via Axios POST request
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(response.data); // Optionally handle response
      
      // Save token and update login state
      login(response.data.token);
  
      // Check if the user is an admin
      // const token = Cookies.get('token');
      const isAdminResponse = await axios.get('http://localhost:5000/api/user', {
        headers: {
          Authorization: `Bearer ${response.data.token}`
        }
      });
      const isAdmin = isAdminResponse.data.role === 'admin';
  
      // Redirect to admin page if user is an admin, else redirect to menu page
      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/menu');
      }
    } catch (error) {
      console.error('Login failed:', error);
      
      // Handle error
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password');
      } else {
        setError('Login failed. Please try again later.');
      }
    }
  };

  return (
    <Flex className="min-h-screen">
      {/* Left Section (Image) */}
      <div className="left-image w-1/2 flex items-center justify-center py-16 px-8">
        <div className="w-full h-full">
          <img className="w-full h-full object-cover rounded-lg" src={leftImg} alt="" />
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <Box className="w-1/2 flex items-center justify-center py-12 px-8">
        <Box className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <Heading as="h2" size="xl" className="text-center mb-6 font-bold">Login</Heading>
          <form onSubmit={handleSubmit}>
          {error && <Alert status="error" marginBottom={4}>{error}</Alert>}
            <FormControl isRequired className="mb-4">
              <FormLabel className="text-sm font-semibold text-gray-600">Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            </FormControl>
            <FormControl isRequired className="mb-4">
              <FormLabel className="text-sm font-semibold text-gray-600">Password</FormLabel>
              <Input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
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
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">Don't have an account? <a href="/register" className="text-teal-600 hover:text-teal-500 font-semibold">Create one</a></p>
          <p className="mt-3 text-center text-sm text-gray-600"><a href="/forgotpassword" className="text-red-300 hover:text-red-500 font-semibold">Forgot Your Password?</a></p>
        </Box>
      </Box>
    </Flex>
  );
}

export default Login;
