import React from "react";
import "./standingsPage-options.styles.scss";
import { Link, Route, Routes } from "react-router-dom";
import DriversStandingsPage from "../DriversStandingsPage/driversStandingsPage-component";

export const StandingsPageOptions = () => {
  return (
    <div className="standings-page">
      <nav className="standings-nav">
        <Link to="/standings/drivers" className="driverStandings-option">
          Driver Standings
        </Link>
        <Link
          to="/standings/constructors"
          className="constructorsStandings-option"
        >
          Constructors Standings
        </Link>
      </nav>
      <div>
        <Routes>
          <Route
            path="/standings/constructors"
            element={<DriversStandingsPage />}
          />
          <Route
            path="/standings/constructors"
            element={<DriversStandingsPage />}
          />
        </Routes>
      </div>
    </div>
  );
};
