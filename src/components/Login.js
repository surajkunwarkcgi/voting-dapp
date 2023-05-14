import React from "react";

const Login = (props) => {
  return (
    <div className="login-container">
      <h1 className="welcome-message">
        welcome to decentralized voting application
      </h1>
      <button className="login-btn" onClick={props.connectWallet}>
        Login Metamask
      </button>
    </div>
  );
};

export default Login;
