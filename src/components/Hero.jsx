import React from 'react';
import bannerHoney from '../assets/banner.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content animate-on-scroll">
          <h1>Experience<br />Nature's <span className="highlight">Sweetest</span> Gift.</h1>
          <p>Premium, Raw, & Pure Organic Honey harvested sustainably from sun-drenched wildflower fields straight to your table.</p>
          <div className="hero-actions">
            <a href="#shop" className="btn">Shop Collection</a>
            <a href="#story" className="btn btn-outline">Learn More</a>
          </div>
        </div>
        <div className="hero-image-container animate-on-scroll delay-200">
          <div className="hero-bg-blob"></div>
          {/* Using the banner honey png from assets */}
          <img
            src={bannerHoney}
            alt="A jar of golden honey with flowers"
            className="hero-image floating"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
