import React from "react";
import "./introPage-standings.styles.scss";

class Standings extends React.Component {
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
    const StandingItems = () =>
      this.state.standings
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
        <div className="constructors-standings-label">
          2021 Drivers Standings
        </div>
        <table className="constructors-standings-table">
          <tbody>
            <StandingItems />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Standings;
