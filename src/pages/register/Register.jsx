import "./register.css"
import React  from 'react';
import { Link } from "react-router-dom";
export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
        <span className="registerlog">Already have an acc?  <a href="registerLog"><Link to="/login" style={{textDecoration:"none", color:"green"}}>Login</Link></a></span>
      </form>
       
    </div>
    )
}