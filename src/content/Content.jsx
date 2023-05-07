import hood from '../assets/8cf921bf8720bcd35b46358d25ea0954.jpg'       
import React from 'react';
import './content.css';

const Header = () => (
  <div className="header section__padding">
    <div className="header-content">
      <h1 className="">Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, tempora quos, obcaecati blanditiis voluptas
         id deserunt natus architecto deleniti vel voluptatem exercitationem nemo tenetur autem 
         sed totam enim explicabo tempore!

      </p>
    
        <br />
        <br />
        <ul>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit.</li>
      </ul>

      <br />
      <h2>Lorem</h2>

      <ul>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit</li>
      </ul>

    </div>

    <div className="header-image">
      {/* import */}
      <img src="https://cdn.discordapp.com/attachments/978126964781096991/978127059354267769/a9cc7b5093c5428e15f75b8a680f7bda.jpg" alt="" class="image"/>
    </div>
  </div>
);

export default Header;