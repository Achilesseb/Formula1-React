import React from "react";
import { useSelector } from "react-redux";
import "./introPage-standings.styles.scss";

const DriverStandings = () => {
  const driversStanding = useSelector((data) => data[0].DriverStandings);
  console.log(driversStanding);
  const StandingItems = () =>
    driversStanding
      .filter((standings) => standings.position <= 4)
      .map((standings) => {
        const { points } = standings;
        const { familyName, givenName } = standings.Driver;
        return (
          <tr className="constructors-standigs-item">
            <th className="constructors-standings-name">{`${
              givenName + " " + familyName
            }`}</th>
            <th className="constructors-standings-points">{points}pts</th>
          </tr>
        );
      });
  return (
    <div className="constructors-standings">
      <div className="constructors-standings-label">2021 Drivers Standings</div>
      <table className="constructors-standings-table">
        <tbody>
          <StandingItems />
        </tbody>
      </table>
    </div>
  );
};

export default DriverStandings;
