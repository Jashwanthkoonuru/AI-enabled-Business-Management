
import React from "react";
import "./Toast.css";
const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <button className="toast-close" onClick={onClose}>
        OK
      </button>
    </div>
  );
};

export default Toast;
