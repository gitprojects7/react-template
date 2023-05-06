import React from 'react'
import './footer.css';
const Footer = () => {

  const top = () => {window.scrollTo(0,0)}; {/*scroll back to top function*/}
  return (
   <footer>
    <div className="content">
      <h1>Lorem</h1>

          
      <button onClick= {top} className="back-to-top"><span className="btnSpan"><i className="fas fa-chevron-up"></i> </span></button> {/*call on click event*/}
      <ul className="socials">
        <li><a href="">Socials:</a></li>
        <li><a href=""><i className="fab fa-twitter"></i></a></li>
        <li><a href=""><i className="fab fa-instagram"></i></a></li>
        <li><a href=""><i className="fab fa-youtube"></i></a></li>
        <li><a href=""><i className="fab fa-pinterest"></i></a></li>

      </ul>
    </div>
   
    <div className="footer-bottom">
      <p>2022@ tphan5901@gmail.com</p>
    </div>
   </footer>
  )
}

export default Footer