import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.mylogo} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            quos, distinctio, consectetur corporis nemo nesciunt ex fugit
            incidunt molestiae molestias, impedit sed minima recusandae! Cumque
            autem ut ipsam vero cum? Commodi aliquid illum dolor eveniet.
          </p>
          <div className='footer-socials'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>CONNECT WITH US</h2>
          <ul>
            <li>+234-816-995-8688</li>
            <li>support@bskitchen.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright © 2024 Bskitchen.com - All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
