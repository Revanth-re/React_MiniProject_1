import React from 'react';
// import './Home.css';
import {Link} from "react-router-dom"
const collections = [
  {
    id: 1,
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Mobiles",
    image: "https://images.unsplash.com/photo-1706372124839-f35d821ccd24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Gaming & Monitors",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Gajala Collections</h1>
          <p>Shop the best deals on electronics, fashion, home essentials, and more.</p>
          <Link className='btn-shop-now' to={"/products"}  >Shop Now</Link>
        </div>
      </section>

      {/* Collections */}
      <section className="collections-section">
        <h2>Explore Our Collections</h2>
        <div className="collections-grid">
          {collections.map(({ id, title, image }) => (
            <div key={id} className="collection-card">
              <img src={image} alt={title} />
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Deals Section */}
      <section className="deals-section">
        <h2>Hot Deals & Offers</h2>
        <p>Check back soon for amazing discounts!</p>
      </section>
    </div>
  );
};

export default Home;
