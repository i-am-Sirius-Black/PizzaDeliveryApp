// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUserId, setCurrentUserId] =useState("")
  const [userEmail, setUserEmail] =useState("")


  const token = Cookies.get("token");

  useEffect(() => {
    // Check if token exists in cookies
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  useEffect(() => {
    // Check UserId
    const userInfo = async () => {
      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data._id) { 
            // console.log("responsedata: ", response.data);
            console.log("responsedataID: ", response.data.email);
            setCurrentUserId(response.data._id);
            setUserEmail(response.data.email);
          }
        } catch (error) {
          console.error("Failed to fetch userId:", error);
        }
      }
    };

    userInfo();
  }, [token]);

  useEffect(() => {
    // Check if user is an Admin
    const checkAdmin = async () => {
      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
 
          if ( response.data.role=== "admin") {
            setIsAdmin(true);
          }
        } catch (error) {
          console.error("Failed to fetch user role:", error);
        }
      }
    };

    checkAdmin();
  }, [token]);


  const login = (token) => {
    Cookies.set("token", token, { expires: 7 });
    setIsLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{currentUserId, userEmail ,isLoggedIn, isAdmin, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
