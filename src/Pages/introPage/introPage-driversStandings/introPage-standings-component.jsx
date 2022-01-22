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
        let data = [];
        const { points, position } = standings;
        const { familyName, givenName } = standings.Driver;
        const driverName = `${givenName + " " + familyName}`;
        data.push([position, driverName, points]);
        return (
          <tr className="constructors-standigs-item">
            {data[0].map((data) => (
              <th className="constructors-standings-cell">{data}</th>
            ))}
          </tr>
        );
      });
  return (
    <div className="constructors-standings">
      <div className="constructors-standings-label">
        2021 Drivers Championship Standings
      </div>
      <table className="constructors-standings-table">
        <tbody className="constructors-standings-body">
          <StandingItems />
        </tbody>
      </table>
    </div>
  );
};

export default DriverStandings;
