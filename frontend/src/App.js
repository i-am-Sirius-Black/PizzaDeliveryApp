import React, { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import NotFound from './pages/NotFound';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Layout from './components/Layout/Layout';
import Menu from './pages/Menu';
import OrderStatus from './pages/OrderStatus';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserDashboard from './pages/UserDashboard';
import { AuthProvider, AuthContext } from './context/AuthContext';
import ResetPassword from './components/Auth/ResetPassword';
import ForgotPassword from './components/Auth/ForgotPassword';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotAuthorized from './components/Auth/NotAuthorized';


function App() {

  const router = createBrowserRouter([
    
    {
      path: '/',
      element: <Layout/>, // Use Layout as the parent route
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'admin',
          element: <Admin />
        }
        ,
        {
          path: 'menu',
          element: <Menu />
        },
        {
          path: 'user',
          element: <User />
        },
        {
          path: 'user-dashboard',
          element: <UserDashboard />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: '/forgotpassword',
          element: <ForgotPassword />
        },
        {
          path: '/resetpassword/:resetToken',
          element: <ResetPassword />
        },
        {
          path: 'status',
          element: <OrderStatus />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'checkout',
          element: <Checkout />
        },
      
        {
          path: 'not-authorized',
          element: <NotAuthorized />
        },
      
        {
          path: 'about',
          element: <AboutUs />
        },
      
        {
          path: 'contact',
          element: <ContactUs />
        },
      
        {
          path: 'privacy-policy',
          element: <PrivacyPolicy />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);

  return (
    <>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </>
  );
}

export default App;

