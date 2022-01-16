import React from "react";
import "./driversStandingsPage.styles.scss";

class DriversStandingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: [],
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
        const { givenName, familyName, permanentNumber } = standings.Driver;
        return (
          <tr className="driver-standigs-table-row">
            <td className="driver-standigs-table-cell">{position}</td>
            <td className="driver-standigs-table-cell">{`${
              givenName + " " + familyName
            }`}</td>
            <td className="driver-standigs-table-cell">{points}</td>
            <td className="driver-standigs-table-cell">{wins}</td>
            <td className="driver-standigs-table-cell">{permanentNumber}</td>
          </tr>
        );
      });
    return (
      <div className="Standings">
        <div className="Standings-label">2021 Current Standings</div>
        <table className="driver-standigs-table">
          <tbody className="driver-standigs-table-body">
            <tr className="driver-standigs-table-row-label">
              <td className="driver-standigs-table-cell">Position</td>
              <td className="driver-standigs-table-cell">Name</td>
              <td className="driver-standigs-table-cell">Points</td>
              <td className="driver-standigs-table-cell">Wins</td>
              <td className="driver-standigs-table-cell">Number</td>
            </tr>
            <StandingTable />
          </tbody>
        </table>
      </div>
    );
  }
}
export default DriversStandingsPage;
