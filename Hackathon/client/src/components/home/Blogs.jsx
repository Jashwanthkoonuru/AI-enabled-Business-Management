import React from "react";
import "../../pages/navbarItems/home.css";
import { assetsData } from "../../assets/Assests.jsx";
import { Link } from "react-router-dom";

const Blogs = () => {
    return(
    <div className="blogs">
        <h1>AI-enabled Business Management Blogs</h1>
        <section className="assets-section">
            <div className="container">
                <div className="assets-grid">
                {assetsData.map((item, index) => (
                    <div key={index} className="asset-card">
                    <div className="asset-image-wrapper">
                        <img src={item.image} alt={item.title} className="asset-image" />
                    </div>
                    <div className="asset-content">
                        <h2 className="asset-category">{item.category}</h2>
                        <h2 className="asset-title">{item.title}</h2>
                        <p className="asset-description">{item.description}</p>
                        <a href="#" className="asset-link">
                        Learn More
                        <svg
                            className="link-icon"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                        <div className="asset-stats">
                        <span className="views">
                            <svg
                            className="icon"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            {item.views}
                        </span>
                        <span className="comments">
                            <svg
                            className="icon"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            {item.comments}
                        </span>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
    )
}
export default Blogs;