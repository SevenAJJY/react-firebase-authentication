import React from "react";
import { Link } from "react-router-dom";
import "./forgotpassword.css";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMsg("Check your inbox to get new password");
    } catch (err) {
      setError("Failed to Reset Password");
    }
    setLoading(false);
  };
  return (
    <div className="form-container">
      <p className="title">Reset password</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {msg && <div className="alert alert-success">{msg}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="text"
            name="email"
            id="email"
            placeholder=""
          />
        </div>
        <button disabled={loading} className="sign">
          Reset Password
        </button>
      </form>
      <p className="signup mt-4">
        Already have an account ?<Link to="/login"> Sign up</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
