import React from 'react';
import { LeafIcon, BeeIcon } from './Icons';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: 'leaf',
      title: 'Ethically Harvested Honey',
      description: 'We work with beekeepers who prioritize bee welfare, ensuring our honey is produced with respect and care for these essential pollinators.',
    },
    {
      id: 2,
      icon: 'bee',
      title: 'Antibiotic Free Honey',
      description: 'Our honey is pure and uncontaminated, free from antibiotics and harmful chemicals, preserving nature\'s perfect gift.',
    },
    {
      id: 3,
      icon: 'leaf',
      title: 'Innovative & Healthy Products',
      description: 'Beyond traditional honey, we craft innovative blends and products that combine nature\'s wellness with modern nutrition science.',
    },
    {
      id: 4,
      icon: 'bee',
      title: 'Safe & Fast Delivery',
      description: 'Secure packaging and expedited shipping ensure your honey arrives fresh, intact, and ready to enhance your wellness journey.',
    },
  ];

  // Split features for left and right columns
  const leftFeatures = [features[0], features[1]];
  const rightFeatures = [features[2], features[3]];

  const renderIcon = (iconType) => {
    return iconType === 'leaf' ? <LeafIcon /> : <BeeIcon />;
  };

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="why-choose-container">
        {/* Left Column Cards */}
        <div className="why-choose-column left-column">
          {leftFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              className={`why-choose-card animate-on-scroll delay-${index * 100}`}
            >
              <div className="why-card-icon">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-description">{feature.description}</p>
              <div className="why-card-accent"></div>
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="why-choose-center animate-on-scroll delay-200">
          <div className="why-center-content">
            <div className="why-leaf-accent top-left">
              <LeafIcon />
            </div>
            
            <h2 className="why-center-headline">
              Why Choose<br />
              <span className="highlight">Nanntu naturals</span>
            </h2>

            {/* Honey Jar Illustration */}
            <div className="why-honey-jar">
              <svg
                viewBox="0 0 100 140"
                className="honey-jar-svg"
              >
                {/* Jar outline */}
                <path
                  d="M 25 30 L 20 40 Q 20 50 20 80 Q 20 100 30 110 L 70 110 Q 80 100 80 80 L 80 40 L 75 30 Z"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                {/* Jar cap */}
                <rect x="30" y="15" width="40" height="15" rx="2" fill="#D4AF37" />
                {/* Honey fill */}
                <path
                  d="M 22 80 Q 22 100 32 108 L 68 108 Q 78 100 78 80 Z"
                  fill="#D4AF37"
                  opacity="0.3"
                />
                {/* Honey shine */}
                <ellipse cx="50" cy="75" rx="20" ry="12" fill="#F2C94C" opacity="0.4" />
              </svg>
            </div>

            <p className="why-center-description">
              From our hives to your home, we deliver pure, ethically-sourced honey that brings wellness and natural sweetness to your life.
            </p>

            <div className="why-leaf-accent bottom-right">
              <LeafIcon />
            </div>
          </div>
        </div>

        {/* Right Column Cards */}
        <div className="why-choose-column right-column">
          {rightFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              className={`why-choose-card animate-on-scroll delay-${(index + 2) * 100}`}
            >
              <div className="why-card-icon">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-description">{feature.description}</p>
              <div className="why-card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
