import React from "react";
import "./driversStandingsPage.styles.scss";
import logo from "../../../navigation/navigation-links/logo.png";

class DriversStandingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      date: Date(),
    };
  }
  async componentDidMount() {
    await fetch("http://ergast.com/api/f1/current/driverStandings.json")
      .then((res) => res.json())
      .then((result) => {
        const standingsRaw =
          result.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        this.setState({ standings: standingsRaw }, () =>
          console.log(this.state)
        );
      });
  }
  render() {
    const StandingTable = () =>
      this.state.standings.map((standings) => {
        let data = [];
        const { position, points, wins } = standings;
        const {
          dateOfBirth,
          givenName,
          familyName,
          permanentNumber,
          nationality,
        } = standings.Driver;
        const { name } = standings.Constructors[0];
        return (
          <tr className="driver-standigs-table-row">
            <td className="driver-standigs-table-cell">{position}</td>
            <td className="driver-standigs-table-cell">{`${
              givenName + " " + familyName
            }`}</td>
            <td className="driver-standigs-table-cell">{points}</td>
            <td className="driver-standigs-table-cell">{wins}</td>
            <td className="driver-standigs-table-cell">{permanentNumber}</td>
            <td className="driver-standigs-table-cell">{nationality}</td>
            <td className="driver-standigs-table-cell">{name}</td>
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
              <td className="driver-standigs-table-cell">Number</td>
              <td className="driver-standigs-table-cell">Nationality</td>
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
  }
}
export default DriversStandingsPage;
