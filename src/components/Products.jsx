import React from 'react';

const products = [
  {
    id: 1,
    name: "Wildflower Honey",
    category: "Pure Collection",
    desc: "Rich, floral notes from pristine meadows. Perfect for tea and baking.",
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1587049352847-4d4b126a5424?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    id: 2,
    name: "Lavender Infused",
    category: "Infused Collection",
    desc: "Delicate and calming lavender essence blended with our golden reserve.",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1588691507712-4211b5e1b213?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    id: 3,
    name: "Acacia Bliss",
    category: "Premium Reserve",
    desc: "Light, clear, and mildly sweet. Our most sought-after vintage honey.",
    price: "$34.00",
    image: "https://images.unsplash.com/photo-1610486719131-ab7cb4ff0a1f?auto=format&fit=crop&q=80&w=800&h=800"
  }
];

const Products = () => {
  return (
    <section id="shop" className="products">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2>Our Featured Collection</h2>
          <p>Discover our range of artisanal honeys, each with its own unique flavor profile reflecting the blooming season.</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card animate-on-scroll delay-${index * 100}`}
            >
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="btn btn-small">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
