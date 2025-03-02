import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="logo" src={assets.logo} alt="" />
                <p>At The Noble Brews, we believe that coffee is more than just a beverage – it's an experience.  
                We're passionate about crafting the perfect cup, using only the finest, ethically sourced beans, 
                and brewing with precision and care. But we're also about creating a space where our community 
                can connect, relax, and feel inspired.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+639123456789</li>
                    <li>thenoblebrews@gmail.com.ph</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Thank you for supporting our small business!</p>
    </div>
  )
}

export default Footer
