import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { loginApi } from "../../apis/Api";

const Login = () => {
  const navigate = useNavigate();
  const [showForgot, setShowForgot] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      setAlert({
        show: true,
        message: "❌ Please enter email, password and select role",
        type: "error",
      });
      return;
    }
    try {
      const res = await loginApi({ email, password });
      const backendRoles = res.data.roles;
      const roleMap = {
        Employee: "ROLE_EMPLOYEE",
        Hr: "ROLE_HR",
        Manager: "ROLE_MANAGER",
      };
      const selectedBackendRole = roleMap[role];
      if (!backendRoles.includes(selectedBackendRole)) {
        setAlert({
          show: true,
          message: "❌ Selected role does not match your account role",
          type: "error",
        });
        return;
      }
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("roles", JSON.stringify(backendRoles));
      localStorage.setItem("email", res.data.email);
      setAlert({
        show: true,
        message: "✅ Login successful",
        type: "success",
      });
      setTimeout(() => {
        if (selectedBackendRole === "ROLE_EMPLOYEE")
          navigate("/employeeDashboard");
        else if (selectedBackendRole === "ROLE_MANAGER")
          navigate("/managerDashboard");
        else if (selectedBackendRole === "ROLE_HR")
          navigate("/hrDashboard");
      }, 300);
    } catch (error) {
      setAlert({
        show: true,
        message: "❌ Invalid email or password",
        type: "error",
      });
    }
  };
  const handleForgotEmailSubmit = (e) => {
    e.preventDefault();
    const emailFormat =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailFormat.test(forgotEmail)) {
      alert("Please enter a valid email address");
      setForgotEmail("");
      return;
    }
    setStep(2);
  };
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otpFormat = /^[0-9]{6}$/;

    if (!otpFormat.test(otp)) {
      alert("Please enter a valid 6-digit OTP");
      setOtp("");
      return;
    }
    setStep(3);
  };
  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    const passwordFormat =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordFormat.test(newPassword)) {
      alert("Password must be minimum 8 characters with letters & numbers");
      setNewPassword("");
      setConfirmNewPassword("");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match");
      setConfirmNewPassword("");
      return;
    }

    alert("Password reset successful");
    setShowForgot(false);
    setStep(1);
  };
  return (
    <div className="login-container-total">
      <form onSubmit={handleLoginSubmit} className="login-card">
        {alert.show && (
          <div className={`alert ${alert.type}`}>
            {alert.message}
          </div>
        )}
        <h2 className="login-title">
          {showForgot ? "Forgot Password" : "Login"}
        </h2>
        {!showForgot && (
          <>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="role"
              required
            >
              <option value="">Select Role</option>
              <option value="Employee">Employee</option>
              <option value="Hr">HR</option>
              <option value="Manager">Manager</option>
            </select>

            <div className="forgot-container">
              <button
                type="button"
                className="forgot-button"
                onClick={() => setShowForgot(true)}
              >
                Forgot Password?
              </button>
            </div>

            <div className="signup-text">
              Don’t have an account? <Link to="/signup">Signup</Link>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </>
        )}

        {/* ================= FORGOT PASSWORD ================= */}
        {showForgot && (
          <>
            {step === 1 && (
              <>
                <label>Enter Your Email:</label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={handleForgotEmailSubmit}
                  className="login-button"
                >
                  Send OTP
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <label>Enter OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={handleOtpSubmit}
                  className="login-button"
                >
                  Verify OTP
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <label>New Password:</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />

                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) =>
                    setConfirmNewPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  onClick={handleResetPasswordSubmit}
                  className="login-button"
                >
                  Reset Password
                </button>
              </>
            )}

            <button
              type="button"
              className="back-button"
              onClick={() => {
                setShowForgot(false);
                setStep(1);
              }}
            >
              Back to Login
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
