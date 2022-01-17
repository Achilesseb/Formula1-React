import React from "react";
import "./standingsPage-options.styles.scss";
import { Link } from "react-router-dom";

export const StandingsPageOptions = () => {
  return (
    <div className="standings-page">
      <nav className="standings-nav">
        <Link to="drivers" className="Standings-main-option drivers">
          Drivers Standings
        </Link>
        <Link
          to="/standings/constructors"
          className="Standings-main-option constructors"
        >
          Constructors Standings
        </Link>
      </nav>
    </div>
  );
};
