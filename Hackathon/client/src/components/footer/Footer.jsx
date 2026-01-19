import React from "react";
import "./footer.css";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="ai-footer">
      <div className="ai-footer-container">
    <div className="ai-footer-brand">
      <div className="ai-footer-logo-brand">
        <img src={home} alt="AI Business Management Logo" className="ai-footer-logo"/>
        <h2>AI Business Management</h2>
      </div>
      <p>Optimizing your business with AI-driven insights and automation.</p>
    </div>

        <div className="ai-footer-links">
          <div className="ai-footer-section">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">AI Analytics</a></li>
              <li><a href="#">Process Automation</a></li>
              <li><a href="#">Predictive Insights</a></li>
            </ul>
          </div>
          <div className="ai-footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="ai-footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ai-footer-bottom">
        <p>© 2026 AI Business Management. All rights reserved.</p>
        <div className="ai-footer-social">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
