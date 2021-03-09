import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong, please contact administrator.</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
