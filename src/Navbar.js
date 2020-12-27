import React from "react";
import logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img src={logo} alt="logo" className="navbar--logo" />
      </div>
      <ul className="navbar--links">
        <li className="navbar-item">home</li>
        <li className="navbar-item">what we do</li>
        <li className="navbar-item">who we are</li>
        <li className="navbar-item">contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
