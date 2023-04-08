import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="" />
        </div>
        <div className="input-group mb-1">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" />
          <div className="forgot">
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>
        </div>
        <button className="sign">Sign in</button>
      </form>
      <p className="signup mt-4">
        Don't have an account ?<Link to="/signup"> Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
