import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import logo from "./../logo.png";
import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header--logo" />
      </Link>
      <Navbar />
    </div>
  );
}
