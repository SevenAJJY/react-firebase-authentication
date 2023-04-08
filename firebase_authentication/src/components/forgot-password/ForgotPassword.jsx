import React from "react";
import { Link } from "react-router-dom";
import "./forgotpassword.css";

const ForgotPassword = () => {
  return (
    <div className="form-container">
      <p className="title">Reset password</p>
      <form className="form">
        <div className="input-group mb-3">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="" />
        </div>
        <button className="sign">Reset Password</button>
      </form>
      <p className="signup mt-4">
        Don't have an account ?<Link to="/signup"> Sign up</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
