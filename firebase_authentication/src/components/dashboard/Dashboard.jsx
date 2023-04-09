import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Dashboard = () => {
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(currentUser);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      setError("Failed to log out!");
    }
  };

  return (
    <>
      <div className="form-container">
        <p className="title">Profile</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="info">
          <strong>Email:</strong> {"  "}
          {currentUser && currentUser.email}
        </div>
        <Link to="/update-profile" className="sign mt-3 text-decoration-none">
          Update profile
        </Link>
      </div>
      <div className="logout" onClick={handleLogout}>
        <button>Log out</button>
      </div>
    </>
  );
};

export default Dashboard;
