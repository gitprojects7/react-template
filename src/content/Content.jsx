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
      <img src="https://www.treehugger.com/thmb/qNlrLboy6-VRSEM5aU9Yh4Wp-Vc=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__04__DanumValleyBorneoTallestTropicalTrees-083831fc57e84995a2b1a3838bed39ff.jpg" alt="" class="image"/>
    </div>
  </div>
);

export default Header;