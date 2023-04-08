import React from "react";
import { Card } from "react-bootstrap";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form-container">
      <p className="title">Sign up</p>
      <form className="form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="input-group mb-4">
          <label htmlFor="CPassword">Password</label>
          <input type="password" name="CPassword" id="CPassword" />
        </div>
        <button className="sign">Sign up</button>
      </form>
      <p className="signup mt-4">
        Already have an account ?<Link to="/login"> Sign in</Link>
      </p>
    </div>
  );
};

export default Signup;
