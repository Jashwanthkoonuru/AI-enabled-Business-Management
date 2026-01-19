import React from "react";
import { content } from "../../assets/Assests.jsx";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <section className="content-section">
      <div className="content-wrapper">
        <div className="content-header">
          <h1>AI-Business Content</h1>
          <p>Transform your business with AI-driven solutions for strategy, analytics, automation, and growth.</p>
        </div>
        <div className="content-grid">
          {content.map((item, index) => (
            <div className="content-card" key={index}>
              <img src={item.image} alt={item.title} className="content-image" />
              <h2 className="content-title">{item.title}</h2>
              <p className="content-description">{item.description}</p>
            </div>
          ))}
        </div>
        <Link to="/signup" ><button className="content-button">View Content</button></Link>
      </div>
    </section>
  );
};

export default Content;
