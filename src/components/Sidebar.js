import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
// import jauntLogo from "./assests/jaunt.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
      {/* <img src={jauntLogo} alt="Jaunt Logo" /> */}

      </div>
      <ul className="sidebar-links">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="icon-dashboard"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/mockTestinterface" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="icon-dashboard"></i>Mock-Tests
          </NavLink>
        </li>
        <li>
          <NavLink to="/practice" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="icon-dashboard"></i>Practice
          </NavLink>
          
        </li>
    
        <li>
          <NavLink to="/MockTestSelection" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="icon-dashboard"></i>MockTestSelection
          </NavLink>
          
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
