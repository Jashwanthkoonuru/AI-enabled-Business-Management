import React from "react";
import Login from "../../assets/images/Login.png";
import LoginComponent from "./Login";
import "./login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const LoginPage = () => {
  return (
    <div className="auth-page">
      <Header />
      <section className="auth-section">
        <div className="auth-container">
          <div className="auth-left">
            <img
              src={Login}
              alt="AI Business"
              className="auth-image"
            />
            <div className="auth-content">
              <h2 className="auth-tag">AI-ENABLED BUSINESS</h2>
              <h1 className="auth-title">
                Smarter Decisions with Artificial Intelligence
              </h1>
              <p className="auth-description">
                Leverage AI-powered insights to automate workflows, improve
                customer experience, and scale your business faster with
                data-driven intelligence.
              </p>
            </div>
          </div>
          <div className="auth-right">
            <LoginComponent />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoginPage;
