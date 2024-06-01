// import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, FormHelperText } from "@chakra-ui/react";
// import { Form } from "react-router-dom";
// import leftImg from '../../assets/images/login.jpg'

// function Register() {
//   return (
//     <Flex className="min-h-screen">
//       {/* Left Section (Image) */}
//       <div className="left-image w-1/2 flex items-center justify-center py-16 px-8">
//         <div className="w-full h-full">
//          <img className="w-full h-full object-cover rounded-lg" src={leftImg} alt="" />
//         </div>
//       </div>

//       {/* Right Section (Registration Form) */}
//       <Box className="w-1/2 flex items-center justify-center py-12 px-8">
//         <Box className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
//           <Heading as="h2" size="xl" className="text-center mb-6 font-bold text-teal-600">Create an account</Heading>
//           <Form action="/register" method="post">
//             <FormControl isRequired className="mb-4">
//               <FormLabel className="text-sm font-semibold text-gray-600">Full Name</FormLabel>
//               <Input type="text" placeholder="Full name" />
//             </FormControl>
//             <FormControl isRequired className="mb-4">
//               <FormLabel className="text-sm font-semibold text-gray-600">Email</FormLabel>
//               <Input type="email" placeholder="Email" />
//             </FormControl>
//             <FormControl isRequired className="mb-4">
//               <FormLabel className="text-sm font-semibold text-gray-600">Password</FormLabel>
//               <Input type="password" placeholder="Password" />
//               <FormHelperText className="text-xs text-gray-400">Password must be at least 8 characters</FormHelperText>
//             </FormControl>
//             <Button
//               mt={4}
//               colorScheme="teal"
//               type="submit"
//               className="w-full py-2 rounded-md text-white font-semibold"
//             >
//               Register
//             </Button>
//           </Form>
//           <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="/login" className="text-teal-600 hover:text-teal-500 font-semibold">Sign in</a></p>
//         </Box>
//       </Box>
//     </Flex>
//   );
// }

// export default Register;


import { useState, useContext  } from 'react';
import axios from 'axios';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, FormHelperText } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import leftImg from '../../assets/images/login.jpg'
import { AuthContext } from '../../context/AuthContext';

function Register() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // State to store form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("form data: ",formData);
      // Send form data via Axios POST request
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data); // Optionally handle response
      // Redirect to login page after successful registration

      // Save token and update login state
      login(response.data.token);

      navigate('/menu');
    } catch (error) {
      console.error('Registration failed:', error);
      // Optionally handle error
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

      {/* Right Section (Registration Form) */}
      <Box className="w-1/2 flex items-center justify-center py-12 px-8">
        <Box className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <Heading as="h2" size="xl" className="text-center mb-6 font-bold text-teal-600">Create an account</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired className="mb-4">
              <FormLabel className="text-sm font-semibold text-gray-600">Full Name</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name" />
            </FormControl>
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
              colorScheme="teal"
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold"
            >
              Register
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="/login" className="text-teal-600 hover:text-teal-500 font-semibold">Sign in</a></p>
        </Box>
      </Box>
    </Flex>
  );
}

export default Register;
