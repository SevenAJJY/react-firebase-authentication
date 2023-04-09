import React from "react";
import { Alert, Card } from "react-bootstrap";
import "./updateProfile.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserEmail, updateUserPassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const CPasswordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value === CPasswordRef.current.value) {
      const promises = [];
      setLoading(true);
      setError("");
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateUserEmail(emailRef.current.values));
      }

      if (passwordRef.current.value) {
        promises.push(updateUserPassword(passwordRef.current.values));
      }

      Promise.all(promises)
        .then((response) => {
          navigate("/");
        })
        .catch((er) => {
          setError("Failed to update account");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError("Passwords do not matche!");
    }
  };

  return (
    <div className="form-container">
      <p className="title">Update profile</p>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="text"
            name="email"
            id="email"
            defaultValue={currentUser?.email}
            required
          />
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
          Update
        </button>
      </form>
      <p className="signup mt-4">
        <Link to="/"> Cancel</Link>
      </p>
    </div>
  );
};

export default UpdateProfile;
