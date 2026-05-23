import React, { useEffect, useRef } from 'react';
import './index.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import FlyingBee from './components/FlyingBee';

function App() {
  // Setup intersection observer for generic scroll animations
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="app" id="top">
      <Header />
      <Hero />
      <Features />
      {/* <Products /> */}
      <Footer />
      
      {/* The floating bee overlay */}
      <FlyingBee />
    </div>
  );
}

export default App;
