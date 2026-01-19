import React from "react";
import "./home.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Header/>
      <section className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>AI-Driven Business Solutions</strong>, where we
            leverage cutting-edge artificial intelligence to transform the way
            businesses operate. Our platform empowers organizations to make
            smarter decisions, automate processes, and enhance overall
            productivity.
          </p>
          <p>
            Our team of experts in AI, data science, and business strategy is
            dedicated to delivering innovative solutions tailored to your unique
            needs. We believe that AI should simplify complexity, not create it.
          </p>
          <p>
            Join us on a journey to intelligent business management, where
            technology meets strategy to create a sustainable competitive
            advantage.
          </p>
          <div className="about-features">
            <div className="feature">
              <h3>AI Automation</h3>
              <p>Streamline repetitive tasks and optimize workflows efficiently.</p>
            </div>
            <div className="feature">
              <h3>Data Insights</h3>
              <p>Unlock actionable insights from your business data in real time.</p>
            </div>
            <div className="feature">
              <h3>Scalable Solutions</h3>
              <p>Adaptable AI tools that grow with your business needs.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;
