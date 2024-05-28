import React from 'react';
import { Link } from 'react-router-dom';
import pizzaLogo from "../../assets/images/pizza-logo.png";

function Navbar() {
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/admin">Admin</Link>
    //   <Link to="/user">User</Link>
    //   <Link to="/login">Login</Link>
    //   <Link to="/register">Register</Link>
    // </nav> 
<div class="bg-[#E7272D]">
    <header class="d-flex flex-wrap align-items-center justify-around py-3 mb-4 border-bottom px-[7.6rem]">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none items-center">
          <span className='w-[50px]'><img src={pizzaLogo} alt="" /></span>
          <div className='flex flex-col items-center'>
          <span >
            <a href="/" className='text-2xl marker-font text-white'>Pizzamore</a>
          </span>
          <p className='text-xs marker-font text-zinc-100'>Dil maange more</p>
          </div>
          
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-2 text-white barlow-font text-l font-bold hover:bg-[#f8aa03] rounded-2xl">HOME</a></li>
        <li><a href="/menu" class="nav-link px-2 text-white barlow-font text-l font-bold hover:bg-[#f8aa03] rounded-2xl">MENU</a></li>
        <li><a href="#" class="nav-link px-2 text-white barlow-font text-l font-bold hover:bg-[#f8aa03] rounded-2xl">PRICING</a></li>
        <li><a href="#" class="nav-link px-2 text-white barlow-font text-l font-bold hover:bg-[#f8aa03] rounded-2xl">ABOUT</a></li>
      </ul>

      <div class="col-md-3 text-end">
            <a href="/login" class="btn me-2 barlow-font text-white outline outline-1 hover:bg-[#FBBE36] hover:outline-0 font-bold">Login</a>
            <a href="/register" class="btn bg-white text-[#E7272D] hover:text-[#FBBE36]  barlow-font text-l font-bold">Sign-up</a>
      </div>
    </header>
  </div>

  )
}

export default Navbar;
