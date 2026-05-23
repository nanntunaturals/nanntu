import React from 'react';
import logo from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer id="about">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="Aura Organic Honey homepage">
              <img src={logo} alt="Aura Organic Honey logo" className="logo-image" />
            </a>
            <p>Reconnecting you with nature through the purest, most exquisite honeys sourced from pristine landscapes.</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Comb Honey</a></li>
              <li><a href="#">Infused Honey</a></li>
              <li><a href="#">Gift Sets</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Beekeeping</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aura Organic Honey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
