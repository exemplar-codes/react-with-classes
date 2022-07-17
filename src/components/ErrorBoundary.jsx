import React, { useState } from "react";
// import { Component } from "react";

// class ErrorBoundary extends Component {
//   constructor() {
//     super();
//     this.state = { hasError: false };
//   }
//   componentDidCatch(error) {
//     console.log(error);
//     this.setState({ hasError: true });
//   }

//   render() {
//     return this.state.hasError ? <p>Error occurred</p> : this.props.children;
//   }
// }

// export default ErrorBoundary;

const ErrorContext = React.createContext({ hasError: false, error: null });

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const errorHasOccurred = (error) => {
    setHasError(true);
    setError(error);
  };

  return hasError ? (
    <p>{`${error}`}</p>
  ) : (
    <ErrorContext.Provider value={{ errorHasOccurred }}>
      {props.children}
    </ErrorContext.Provider>
  );
}

export { ErrorContext };
export default ErrorBoundary;
