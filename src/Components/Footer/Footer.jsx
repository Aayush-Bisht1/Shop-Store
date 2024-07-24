import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo-mine.png'
import insta_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOP STORE</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        {/* <div className="footer-socials"> */}
        <div className="footer-icons">
            <img src={insta_icon} alt="" />
            <img src={pinterest_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
        </div>
        {/* </div> */}
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer