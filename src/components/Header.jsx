import React from 'react';
import logo from '../assets/logo1.png';

const Header = () => {
  return (
    <header>
      <div className="container nav-container">
        <a href="#top" className="logo" aria-label="Aura Organic Honey homepage">
          <img src={logo} alt="Aura Organic Honey logo" className="logo-image" />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#shop">Shop</a>
          <a href="#story">Our Story</a>
          <a href="#types">Honey Types</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn cart-icon" aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">2</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
