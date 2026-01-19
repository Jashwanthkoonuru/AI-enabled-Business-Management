import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 style={{ color: "red", textAlign: "center" }}>
          Something went wrong. Check console.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

