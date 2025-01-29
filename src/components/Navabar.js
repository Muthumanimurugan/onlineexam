import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navabar.css"; // Add styles for the navbar

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>

      MockTest Application
            </div>
      <div className="navbar-links">
        <button className="nav-button" onClick={() => navigate("/login")}>
        Get Started
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
