import React from 'react';

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
import Single from "./components/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

function App(){
  const user =false; 
  return (
  <div className="App">
    <div className="gradient__bg">
      <Router>
      <Navbar />
      
      <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/account' element={ user ? <Home /> : <Account />} />
      <Route path='/write' element={ user ? <Home /> : <Write />} />
        </Routes>
      </Router >
      <Content />
    </div>
    <Footer />
  </div>
);
}

export default App;