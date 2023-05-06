import React from 'react'
import './header.css';
import background from '../../assets/wp6325979.jpg'
const Home = () => {
  return (
    
    <div className="content">

<div className="text">
     <span className="textone"> Lorem ipsum dolor sit</span>   
      <span className="title"> Blogging is dead... we have twitter :)</span>    
     <span className="texttwo"> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</span>     
         
          </div>
          <img src={background} alt="" class="image2" />
   
    </div>
  )
}

export default Home;