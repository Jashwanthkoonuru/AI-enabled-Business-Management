import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../../apis/Api";
import "./signup.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const SignupPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !role) {
      alert("Please fill all required fields!");
      return;
    }
    try {
      await registerApi({
        username: fullName,
        email,
        password,
        role: role,
      });
      alert("Signup successful. Please login.");
      navigate("/login");
    } catch (err) {
      console.log("Backend error:", err.response?.data);
      alert(JSON.stringify(err.response?.data || "No response body"));
    }
  };
  return (
    <>
      <Header />
      <div className="signup-container">
        <form className="signup-card" onSubmit={handleSubmit}>
          <h2 className="signup-title">Signup</h2>
          <label>Full Name:</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Mobile Number:</label>
          <input
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="EMPLOYEE">Employee</option>
            <option value="HR">HR</option>
            <option value="MANAGER">Manager</option>
          </select>
          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button type="submit">Signup</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
