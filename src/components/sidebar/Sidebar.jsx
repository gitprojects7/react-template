import React from 'react';
import './sidebar.css';
import hood from '../../assets/a.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarcontent">
        <span className="spantitle">In the hood</span>
        <img src={hood} alt="" className="image"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta.
           Dolores odit a sint itaque numquam commodi nemo labore minus
      </p>
      </div>
      <div className="sidebarcontent">
        <span className="title2">Socials</span>
        <div className="socials">
      
        <li><a href=""><i className="fab fa-twitter"></i></a></li>
        <li><a href=""><i className="fab fa-instagram"></i></a></li>
        <li><a href=""><i className="fab fa-youtube"></i></a></li>
        <li><a href=""><i className="fab fa-pinterest"></i></a></li>
    
        </div>
      </div>
    </div>
  )
}


export default Sidebar;