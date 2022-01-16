import React from "react";
import "./introPage-standings.styles.scss";

class Standings extends React.Component {
  constructor(props) {
    super(props);
    this.keyCount = 0;
    this.createKey = this.createKey.bind(this);
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
  createKey() {
    return this.keyCount++;
  }
  render() {
    const StandingItems = () =>
      this.state.standings
        .filter((standings) => standings.position <= 4)
        .map((standings) => {
          const { position, points } = standings;
          const { familyName, givenName } = standings.Driver;
          return (
            <tr className="driver-standing">
              <th className="driver-standing-name">{`${
                givenName + " " + familyName
              }`}</th>
              <th className="driver-standing-points">{points}pts</th>
            </tr>
          );
        });
    return (
      <div className="Standings">
        <div className="Standings-label">2021 Current Standings</div>
        <table className="Standings-table">
          <tbody>
            <StandingItems />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Standings;
