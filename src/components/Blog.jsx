import React from 'react';

// Dummy blog posts data with rich content
const blogPosts = [
  {
    id: 1,
    title: "The Art of Raw Honey: Why Freshness Matters",
    category: "Education",
    author: "Dr. Amber Wells",
    date: "May 18, 2026",
    readTime: "5 min read",
    excerpt: "Discover why raw, unpasteurized honey retains superior nutritional benefits and how proper harvesting preserves nature's golden gift.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600&h=400",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Beekeeping: Our Ethical Promise",
    category: "Sustainability",
    author: "Marcus Green",
    date: "May 15, 2026",
    readTime: "7 min read",
    excerpt: "Learn how we partner with local beekeepers to ensure every jar of HoneyVeda supports ethical practices and protects bee populations.",
    image: "https://images.unsplash.com/photo-1584829212370-6a24f6b79d19?auto=format&fit=crop&q=80&w=600&h=400",
    featured: false
  },
  {
    id: 3,
    title: "Honey Recipes: 10 Ways to Elevate Your Kitchen",
    category: "Recipes",
    author: "Chef Isabella",
    date: "May 12, 2026",
    readTime: "8 min read",
    excerpt: "From morning rituals to gourmet dishes—explore creative ways to incorporate premium honey into your culinary adventures.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600&h=400",
    featured: false
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <h2>Our Honey Journal</h2>
          <p>Stories, insights, and tips from our community of honey enthusiasts, chefs, and sustainability advocates.</p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`blog-card animate-on-scroll delay-${index * 100} ${post.featured ? 'featured' : ''}`}
            >
              {/* Blog Image */}
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} />
                {post.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>

              {/* Blog Content */}
              <div className="blog-content">
                {/* Meta Info */}
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="blog-title">{post.title}</h3>

                {/* Excerpt */}
                <p className="blog-excerpt">{post.excerpt}</p>

                {/* Footer Info */}
                <div className="blog-footer">
                  <div className="blog-author-info">
                    <span className="blog-author">{post.author}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <a href="#" className="read-more-link" aria-label={`Read ${post.title}`}>
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="blog-cta animate-on-scroll">
          <a href="#" className="btn">Explore All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
