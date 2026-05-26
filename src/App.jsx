import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, { useState } from "react";
import { useEffect } from 'react';
import Login from './components/Login'
import MainPage from './components/MainPage'
import Signup from './components/Signup'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const activeUser = localStorage.getItem("user");
    if (activeUser) {
      setIsLoggedIn(true);
      setLoggedInUser(activeUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setLoggedInUser("");
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/MainPage' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;