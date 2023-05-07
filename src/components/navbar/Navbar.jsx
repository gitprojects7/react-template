import './navbar.css';

import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';    {/* burger icon import*/}


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">  {/* container*/}
   
        <div className="navbar-title">   {/* left item */}
          <h1>Blog site</h1>
        </div>

        <div className="navbar-links_container"> {/* center */}
          <button> <Link to="/home" style={{textDecoration:"none", color:"inherit"}}>Home</Link></button>
          <button>Who made this site?</button>
        </div>


      <div className="navbar-button"> {/* right */}
        <button type="submit">Don't click</button>
      </div>
      {/* burger menu idk */}
      <div className="navbar-menu">

          {toggleMenu
            ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} /> /* trigger state */
            : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            
        <div className="navbar-menu_container scale-up">
          <div className="navbar-menu-links">
            <p> <Link to="/home" style={{textDecoration:"none", color:"inherit"}}>Home</Link></p>
            <p> <Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Login</Link></p>
            <p> <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>register</Link></p>
          </div>

          <div className="burger-menu-button">
    
            <button type="button">Dont click me</button>
          </div>

        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;