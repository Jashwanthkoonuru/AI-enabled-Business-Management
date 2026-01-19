import React from "react";
import {homeImage} from "../../assets/Assests.jsx";
import "../../pages/navbarItems/home.css";
import Blogs from "./Blogs.jsx";
import Features from "./Features.jsx";
import Footer from '../footer/Footer.jsx';
import { Link } from "react-router-dom";
import Content from "./Content.jsx";
import BusinessSection from "./BusinessSection.jsx";
const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              AI-enabled Business Management
              <br className="lg-break" />for Modern Enterprises
            </h1>
            <p className="hero-description">
              Transform your business with intelligent automation, data-driven insights, and AI-powered decision-making. Streamline operations, forecast trends, and make faster, smarter decisions with AI.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn-primary">Get Started</Link>
              <Link to="/about" className="btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={homeImage[0].homeimages}
              alt="AI Business"
            />
          </div>
        </div>
        <div className="features">
          <h2>Why Choose AI for Your Business?</h2>
          <div className="feature-cards">
            <div className="card">📊 Smart Analytics</div>
            <div className="card">🤖 Automation</div>
            <div className="card">📈 AI Forecasting</div>
            <div className="card">⚡ Faster Decisions</div>
          </div>
        </div>
          <Blogs/>
          <Features/>
          <Content/>
          <BusinessSection/>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
