import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import NotFound from './pages/NotFound';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Layout from './components/Layout/Layout';
import Menu from './pages/Menu';
import OrderStatus from './pages/OrderStatus';
import OrderSummary from './pages/OrderSummary';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';

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
        },
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
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        ,
        {
          path: 'status',
          element: <OrderStatus />
        },
        ,
        {
          path: 'summary',
          element: <OrderSummary />
        },
        ,
        {
          path: 'checkout',
          element: <Checkout />
        },
        ,
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
    <RouterProvider router={router} />
    </>
  );
}

export default App;

