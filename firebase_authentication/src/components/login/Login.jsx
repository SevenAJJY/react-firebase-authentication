import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError("Failed to Log In");
    }
    setLoading(false);
  };
  return (
    <div className="form-container">
      <p className="title">Login</p>
      {error && (
        <div className="alert alert-danger" variant="danger">
          {error}
        </div>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="text" name="email" id="email" required />
        </div>
        <div className="input-group mb-1">
          <label htmlFor="password">Password</label>
          <input
            disabled={loading}
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            required
          />
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
