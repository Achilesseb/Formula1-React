import "./navigation-links-component.styles.scss";
import logo from "./logo.png";
import React from "react";
import { Link } from "react-router-dom";
const NavigationLinks = () => (
  <div className="navigation-links">
    <Link className="option" to="/standings">
      Standings
    </Link>
    <Link className="option" to="/circuits">
      Circuits
    </Link>

    <Link className="option logo" to="/">
      <img className="logo" src={logo} />
    </Link>
    <Link className="option" to="/constructors">
      Constructors
    </Link>
    <Link className="option" to="/drivers">
      Drivers
    </Link>
  </div>
);

export default NavigationLinks;
