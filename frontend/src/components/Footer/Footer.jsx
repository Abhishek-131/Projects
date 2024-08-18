import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Tomato is your one-stop solution for all your culinary cravings. Whether you're in the mood for a quick snack, a hearty meal, or a gourmet feast, FoodHub connects you with the best local restaurants and eateries.</p>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/profile.php?id=100013624876084" target="_blank" rel="noopener noreferrer"><img  src={assets.facebook_icon} alt="" /></a>
                <a href="https://twitter.com/Abhishe20999970" target="_blank" rel="noopener noreferrer"><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://www.linkedin.com/in/abhisheksdot/" target="_blank" rel="noopener noreferrer"><img src={assets.linkedin_icon} alt="" /></a>
                
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li> <a href="#explore-menu" ></a>Home</li>
                <li><a href="#explore-menu"></a>About us</li>
                <li><a href="#explore-menu"></a>Delivery</li>
                <li><a href="#explore-menu"></a>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9998887777</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
