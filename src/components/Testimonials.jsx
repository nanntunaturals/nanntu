import React from 'react';

// Dummy testimonials data with customer reviews and ratings
const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Wellness Enthusiast",
    rating: 5,
    text: "The raw honey from HoneyVeda has completely transformed my morning routine. The quality is exceptional, and I can taste the difference immediately. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    verified: true
  },
  {
    id: 2,
    name: "James Chen",
    role: "Chef & Food Blogger",
    rating: 5,
    text: "As a professional chef, I'm picky about ingredients. HoneyVeda's honey is pure, unadulterated perfection. It's elevated every dish I've created with it.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    verified: true
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Health Coach",
    rating: 5,
    text: "I recommend HoneyVeda honey to all my clients. Antibiotic-free, ethically sourced, and absolutely delicious. You can't find better quality anywhere.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    verified: true
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Beekeeper",
    rating: 5,
    text: "As someone who keeps bees myself, I deeply respect HoneyVeda's commitment to sustainable practices. Their honey speaks volumes about their dedication.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    verified: true
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={`star ${i < rating ? 'filled' : 'empty'}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <h2>Loved by Our Community</h2>
          <p>Real customers sharing their HoneyVeda experiences and the difference pure, ethical honey makes in their lives.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card animate-on-scroll delay-${index * 100}`}
            >
              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Quote Text */}
              <p className="testimonial-text">"{testimonial.text}"</p>

              {/* Customer Info */}
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">
                    {testimonial.name}
                    {testimonial.verified && (
                      <span className="verified-badge" title="Verified Purchase">✓</span>
                    )}
                  </h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
