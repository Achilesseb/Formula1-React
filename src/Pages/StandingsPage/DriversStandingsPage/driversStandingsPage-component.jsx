import React from "react";
import "./driversStandingsPage.styles.scss";
import logo from "../../../navigation/navigation-links/logo.png";
import { useSelector } from "react-redux";

const DriversStandingsPage = () => {
  const driversStandingData = useSelector((data) => data[0].DriverStandings);
  console.log(driversStandingData);
  const StandingTable = () =>
    driversStandingData.map((standings) => {
      let data = [];
      const { position, points, wins } = standings;
      const { givenName, familyName } = standings.Driver;
      const driverName = `${givenName + " " + familyName}`;
      const { name: teamName, constructorId } = standings.Constructors[0];
      data.push([position, driverName, points, wins]);
      return (
        <tr className="driver-standigs-table-row">
          {data[0].map((data) => (
            <td className="driver-standigs-table-cell">{data}</td>
          ))}
          <td
            style={{ color: `var(--color-${constructorId})`, opacity: 0.9 }}
            className="driver-standigs-table-cell"
          >
            {teamName}
          </td>
        </tr>
      );
    });
  return (
    <div className="Standings">
      <div className="Standings-label">2021 DRIVERS Standings</div>
      <table className="driver-standigs-table">
        <tbody className="driver-standigs-table-body">
          <tr className="driver-standigs-table-row-label">
            <td className="driver-standigs-table-cell">Position</td>
            <td className="driver-standigs-table-cell">Name</td>
            <td className="driver-standigs-table-cell">Points</td>
            <td className="driver-standigs-table-cell">Wins</td>
            <td className="driver-standigs-table-cell">Team</td>
          </tr>
          <StandingTable />
        </tbody>
      </table>
      <div className="constructors-standings-page-content f1logo">
        <img src={logo} className="logo-standings" />
      </div>
    </div>
  );
};

export default DriversStandingsPage;
