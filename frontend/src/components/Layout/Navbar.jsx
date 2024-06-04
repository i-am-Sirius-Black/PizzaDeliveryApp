import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import Cookies from "js-cookie";

function Navbar() {
  const { isLoggedIn, logout, isAdmin } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const user = userName.split(" ");
  

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = Cookies.get("token"); // Retrieve the token from the cookie named 'token'
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await axios.get("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserName(response.data.name);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (isLoggedIn) {
      fetchUserName();
    }
  }, [isLoggedIn]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="border-solid border-gray-200 w-full border-b py-3 border-bottom bg-[#E7272D] px-[7.6rem]">
      <div className="container mx-auto">
        {isAdmin ? (
          <div className="w-full flex justify-center px-12 lg:flex-row">
          <div className="">
            <a href="/admin" className="flex items-center w-[60px]">
              <img className="rounded-full" src={logo} alt="Logo" />
            </a>
          </div>
          <div
            className="hidden w-full lg:flex lg:pl-11 text-white"
            id="navbar-with-secondary-icon"
          >
            <ul className="flex items-center flex-col max-lg:gap-4 lg:mt-0 lg:ml-auto lg:flex-row">
              <li>
                <a
                  href="/inventory"
                  className="flex items-center justify-between text-sm lg:text-base font-bold hover:text-[#F8AA03] transition-all duration-500 lg:mr-6 md:mb-0 md:mr-3"
                >
                  Item_Inventory
                </a>
              </li>
              <li>
                <a
                  href="/add-pizza"
                  className="flex items-center justify-between text-sm lg:text-base font-bold hover:text-[#F8AA03] transition-all duration-500 lg:mr-6 md:mb-0 md:mr-3"
                >
                  AddUpdatePizza
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="flex items-center justify-between text-sm lg:text-base font-bold hover:text-[#F8AA03] transition-all duration-500 lg:mr-6 md:mb-0 md:mr-3"
                >
                  Orders_Management
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-3 lg:flex-row">

            <div className="dropdown relative inline-flex">
              <button
                type="button"
                onClick={toggleDropdown}
                className="dropdown-toggle inline-flex justify-center items-center gap-1 text-lg text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-300 hover:text-gray-900"
              >
                <i className="ri-user-line"></i>
              </button>
              <div
                className={`dropdown-menu rounded-xl shadow-lg bg-white absolute -left-20 top-full w-max mt-2 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
                aria-labelledby="dropdown-2"
              >
                <ul className="py-2">
                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="/admin"
                    >
                      <h4 className="font-bold barlow-font text-green-300">
                        Hello' {user[0]}
                      </h4>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="/status"
                    >
                      Order Status
                    </a>
                  </li>

                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-red-500 font-medium"
                      onClick={logout}
                      href="/"
                    >
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        ) : isLoggedIn ? (
          <div className="w-full flex flex-col px-12 lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="/" className="flex items-center w-[80px]">
                <img className="rounded-full" src={logo} alt="Logo" />
              </a>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-11 text-white"
              id="navbar-with-secondary-icon"
            >
              <ul className="flex items-center flex-col max-lg:gap-4 lg:mt-0 lg:ml-auto lg:flex-row">
                <li>
                  <a
                    href="/"
                    className="flex items-center justify-between text-sm lg:text-base font-bold hover:text-[#F8AA03] transition-all duration-500 lg:mr-6 md:mb-0 md:mr-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="flex items-center justify-between text-sm lg:text-base font-bold hover:text-[#F8AA03] transition-all duration-500 lg:mr-6 md:mb-0 md:mr-3"
                  >
                    Order Pizza
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="flex items-center justify-between text-sm lg:text-base font-bold hover:text-[#F8AA03] transition-all duration-500 lg:mr-6 md:mb-0 md:mr-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="flex items-center justify-between text-sm lg:text-base font-bold hover:text-[#F8AA03] transition-all duration-500 lg:mr-6 md:mb-0 md:mr-3"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex items-center gap-3 lg:flex-row">
              <a
                href="/cart"
                className="flex items-center justify-center text-lg text-white font-semibold transition-all duration-300 hover:text-gray-900"
              >
                <i className="ri-shopping-cart-line"></i>
              </a>

              <div className="dropdown relative inline-flex">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="dropdown-toggle inline-flex justify-center items-center gap-1 text-lg text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-300 hover:text-gray-900"
                >
                  <i className="ri-user-line"></i>
                </button>
                <div
                  className={`dropdown-menu rounded-xl shadow-lg bg-white absolute -left-20 top-full w-max mt-2 ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                  aria-labelledby="dropdown-2"
                >
                  <ul className="py-2">
                    <li>
                      <a
                        className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                        href="/downloads"
                      >
                        <h4 className="font-bold barlow-font text-green-300">
                          Hello' {user[0]}
                        </h4>
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                        href="/status"
                      >
                        Order Status
                      </a>
                    </li>

                    <li>
                      <a
                        className="block px-6 py-2 hover:bg-gray-100 text-red-500 font-medium"
                        onClick={logout}
                        href="/"
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between w-full lg:flex-row">
              <a href="/" className="flex items-center w-[80px]">
                <img className="rounded-full" src={logo} alt="brand image" />
              </a>
              <div className="flex items-center">
                <a href="/login" className="btn-secondary btn-small">
                  {" "}
                  Login{" "}
                </a>
                <a href="/register" className="btn-primary btn-small md:ml-5">
                  {" "}
                  Sign up{" "}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
