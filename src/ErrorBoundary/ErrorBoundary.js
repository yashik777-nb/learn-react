import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: info,
    });
  };

  render() {
    if (this.setState.hasError) return <h1>Something went Wrong</h1>;
    return this.props.children;
  }
}
