import React from "react";
import "../../pages/navbarItems/home.css"; 
import { assetsFeatures } from "../../assets/Assests.jsx";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <header className="feature-header">
          <h1 className="feature-title">AI-Enabled Business Management</h1>
          <p className="feature-subtitle">
            Leverage artificial intelligence to optimize your business processes, make data-driven decisions, and drive sustainable growth.
          </p>
          <div className="feature-divider"></div>
        </header>
        <div className="feature-grid">
          {assetsFeatures.map((item, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h2 className="feature-card-title">{item.title}</h2>
              <p className="feature-card-description">{item.description}</p>
              <a href="#learn-more" className="feature-link">
                Learn More <span className="feature-arrow">→</span>
              </a>
            </div>
          ))}
        </div>
        <Link to="/signup"><button className="feature-cta">Get Started</button></Link>
      </div>
    </section>
  );
};

export default Features;
