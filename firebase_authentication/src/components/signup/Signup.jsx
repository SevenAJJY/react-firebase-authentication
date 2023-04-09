import React from "react";
import { Alert, Card } from "react-bootstrap";
import "./signup.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const CPasswordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    passwordRef.current.value !== CPasswordRef.current.value
      ? setError("Passwords do not matche!")
      : setError("");
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Failed to create an account!");
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <p className="title">Sign up</p>
      {error && (
        <div className="alert alert-danger" variant="danger">
          {error}
        </div>
      )}
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
            ref={CPasswordRef}
            type="password"
            name="CPassword"
            id="CPassword"
          />
        </div>
        <button type="submit" className="sign" disabled={loading}>
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
