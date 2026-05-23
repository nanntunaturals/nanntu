import React from 'react';

// Dummy featured products data - Premium/curated selection
const featuredProducts = [
  {
    id: 1,
    name: "Golden Reserve Wildflower",
    category: "Premium Reserve",
    rating: 5,
    reviews: 127,
    price: "$42.00",
    originalPrice: "$52.00",
    badge: "Best Seller",
    desc: "Our signature blend sourced from pristine wildflower meadows. Deep amber color with complex floral notes.",
    image: "https://images.unsplash.com/photo-1587049352847-4d4b126a5424?auto=format&fit=crop&q=80&w=500&h=500",
    inStock: true,
    flavor: "Floral, Complex",
    harvest: "Summer 2025"
  },
  {
    id: 2,
    name: "Lavender Moonlight",
    category: "Infused Collection",
    rating: 5,
    reviews: 89,
    price: "$36.00",
    originalPrice: "$44.00",
    badge: "New",
    desc: "Delicate lavender essence carefully blended with our golden reserve. Perfect for tea, relaxation, and wellness.",
    image: "https://images.unsplash.com/photo-1588691507712-4211b5e1b213?auto=format&fit=crop&q=80&w=500&h=500",
    inStock: true,
    flavor: "Floral, Calming",
    harvest: "Spring 2026"
  },
  {
    id: 3,
    name: "Acacia Pure Excellence",
    category: "Ultra Premium",
    rating: 5,
    reviews: 156,
    price: "$54.00",
    originalPrice: "$68.00",
    badge: "Limited",
    desc: "Our rarest and most sought-after honey. Light, crystalline, and mildly sweet with a refined character.",
    image: "https://images.unsplash.com/photo-1610486719131-ab7cb4ff0a1f?auto=format&fit=crop&q=80&w=500&h=500",
    inStock: true,
    flavor: "Delicate, Refined",
    harvest: "Spring 2025"
  }
];

// Star rating component
const StarRating = ({ rating, reviews }) => {
  return (
    <div className="product-rating">
      <div className="stars">
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
      <span className="reviews-count">({reviews} reviews)</span>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section id="featured-products" className="featured-products">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <h2>Premium Selections</h2>
          <p>Handpicked honey varieties that showcase the finest flavors, highest ethical standards, and our commitment to pure quality.</p>
        </div>

        {/* Featured Products Grid */}
        <div className="featured-products-grid">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`featured-product-card animate-on-scroll delay-${index * 100}`}
            >
              {/* Product Image Container */}
              <div className="featured-product-image-wrap">
                <img src={product.image} alt={product.name} />
                
                {/* Badge */}
                {product.badge && (
                  <div className="product-badge">{product.badge}</div>
                )}
                
                {/* Stock Status */}
                {!product.inStock && (
                  <div className="out-of-stock-overlay">Out of Stock</div>
                )}
              </div>

              {/* Product Info */}
              <div className="featured-product-info">
                {/* Category */}
                <span className="featured-product-category">{product.category}</span>

                {/* Title */}
                <h3 className="featured-product-title">{product.name}</h3>

                {/* Rating */}
                <StarRating rating={product.rating} reviews={product.reviews} />

                {/* Description */}
                <p className="featured-product-desc">{product.desc}</p>

                {/* Product Details */}
                <div className="product-details">
                  <div className="detail-item">
                    <span className="detail-label">Flavor Profile:</span>
                    <span className="detail-value">{product.flavor}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Harvest:</span>
                    <span className="detail-value">{product.harvest}</span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="featured-product-footer">
                  <div className="price-section">
                    <span className="original-price">{product.originalPrice}</span>
                    <span className="featured-product-price">{product.price}</span>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-small" 
                    disabled={!product.inStock}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="featured-cta animate-on-scroll">
          <p>Discover our complete collection of ethically sourced, premium honey varieties</p>
          <a href="#shop" className="btn">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
