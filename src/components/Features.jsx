import React from 'react';
import { LeafIcon, BeeIcon, HiveIcon, TruckIcon, ReturnIcon, ShieldIcon, HeadphoneIcon } from './Icons';

const Features = () => {
  return (
    <section id="story" className="trust-features">
      <div className="container">
        
        {/* Top Banner section */}
        <div className="trust-banner animate-on-scroll">
          <div className="trust-banner-bg-img"></div>
          
          <div className="trust-banner-content">
            <div className="trust-text">
              <h2>Taste the Nature,<br/>Feel the Difference</h2>
              <p>From our hives to your home, we bring you the purest honey nature has to offer.</p>
            </div>
            
            <div className="trust-stats">
              <div className="stat-item">
                <div className="stat-icon"><BeeIcon /></div>
                <h4>500+</h4>
                <span>Happy Customers</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><LeafIcon /></div>
                <h4>100%</h4>
                <span>Natural Honey</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><HiveIcon /></div>
                <h4>50+</h4>
                <span>Trusted Farms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature row */}
        <div className="features-row animate-on-scroll delay-100">
          <div className="feature-item-small">
            <div className="feature-icon-small"><TruckIcon /></div>
            <div className="feature-text-small">
              <h4>FREE SHIPPING</h4>
              <p>On orders over $49</p>
            </div>
          </div>
          <div className="feature-item-small">
            <div className="feature-icon-small"><ReturnIcon /></div>
            <div className="feature-text-small">
              <h4>EASY RETURNS</h4>
              <p>30 days return policy</p>
            </div>
          </div>
          <div className="feature-item-small">
            <div className="feature-icon-small"><ShieldIcon /></div>
            <div className="feature-text-small">
              <h4>SECURE PAYMENT</h4>
              <p>100% secure checkout</p>
            </div>
          </div>
          <div className="feature-item-small">
            <div className="feature-icon-small"><HeadphoneIcon /></div>
            <div className="feature-text-small">
              <h4>CUSTOMER SUPPORT</h4>
              <p>We are here to help</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom separator */}
      <div className="wave-separator">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-primary)" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          <path fill="var(--color-primary-light)" fillOpacity="0.5" d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,80C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Features;
