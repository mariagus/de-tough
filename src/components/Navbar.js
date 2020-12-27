import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import logo from "./../logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar--logo" />
        </Link>
      </div>
      <ul className="navbar--links">
        <li>
          <NavLink
            exact
            to="/"
            className="navbar-item"
            activeStyle={{ color: "red" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="navbar-item"
            activeStyle={{ color: "red" }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/expertise"
            className="navbar-item"
            activeStyle={{ color: "red" }}
          >
            Expertise
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar-item">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
