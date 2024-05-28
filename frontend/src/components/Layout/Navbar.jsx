import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/admin">Admin</Link>
    //   <Link to="/user">User</Link>
    //   <Link to="/login">Login</Link>
    //   <Link to="/register">Register</Link>
    // </nav> 
<div class="container bg-dark border-bottom border-body">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
            <a href="/login" class="btn btn-outline-primary me-2">Login</a>
            <a href="/register" class="btn btn-primary">Sign-up</a>
      </div>
    </header>
  </div>

  )
}

export default Navbar;
