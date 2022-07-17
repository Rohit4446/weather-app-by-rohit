import React from "react";

const AppError = () => {
  return (
    <h1>
      Something went wrong <span> Please Refresh</span>
    </h1>
  );
};

export class CatchError extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <AppError /> : children;
  }
}

export default CatchError;
