import React from "react";
import { Alert, Card } from "react-bootstrap";
import "./signup.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useRef } from "react";

const Signup = () => {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const CPassword = useRef();

  const handleSubmit = async (e) => {
    if (passwordRef.current.value === CPassword.current.value) {
      setError("Passwords do not matche");
    }
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("Failed to create an account!");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <p className="title">Sign up</p>
      {error && <Alert variant="danger">{error}</Alert>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="text" name="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="input-group mb-4">
          <label htmlFor="CPassword">Password</label>
          <input
            ref={CPassword}
            type="password"
            name="CPassword"
            id="CPassword"
          />
        </div>
        <button className="sign" disabled={loading}>
          Sign up
        </button>
      </form>
      <p className="signup mt-4">
        Already have an account ?<Link to="/login"> Sign in</Link>
      </p>
    </div>
  );
};

export default Signup;
