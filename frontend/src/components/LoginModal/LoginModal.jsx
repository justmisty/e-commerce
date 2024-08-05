import React, { useState } from "react";
import "./LoginModal.css";
import { assets } from "../../assets/assets";

const LoginModal = ({ setShowLogin }) => {
  const [loginState, setLoginState] = useState("Login");
  return (
    <div className="login-modal">
      <form action="" className="login-modal-container">
        <div className="modal-title">
          <h2>{loginState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-modal-input">
          {loginState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="">
          {loginState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-modal-condition">
          <input type="checkbox" required />
          <p>By proceeding, i agree to the terms of use & privacy policy</p>
        </div>
        {loginState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setLoginState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setLoginState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginModal;
