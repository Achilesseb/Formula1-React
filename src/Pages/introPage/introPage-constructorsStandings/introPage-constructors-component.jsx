import React from "react";
import "./introPage-constructors.styles.scss";

class ConstructorsStandings extends React.Component {
  constructor(props) {
    super(props);
    this.keyCount = 0;
    this.createKey = this.createKey.bind(this);
    this.state = {
      standings: [],
    };
  }
  async componentDidMount() {
    await fetch("http://ergast.com/api/f1/current/constructorStandings.json")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const constructorStandingsRaw =
          response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        this.setState({ standings: constructorStandingsRaw }, () =>
          console.log(this.state)
        );
      });
  }
  createKey() {
    return this.keyCount++;
  }
  render() {
    const ConstructorStandingItems = () =>
      this.state.standings
        .filter((standings) => standings.position < 5)
        .map((standing) => {
          console.log(standing);
          const { position, points } = standing;
          const { name } = standing.Constructor;
          return (
            <tbody>
              <tr className="constructors-standigs-item">
                <th
                  key={this.createKey()}
                  className="constructors-standings-name"
                >{`${position + ". " + name}`}</th>
                <th
                  key={this.createKey}
                  className="constructors-standings-points"
                >
                  {points} pts
                </th>
              </tr>
            </tbody>
          );
        });
    return (
      <div className="constructors-standings">
        <div className="constructors-standings-label">
          2021 Constructors Standings
        </div>
        <table className="constructors-standings-table">
          <ConstructorStandingItems />
        </table>
      </div>
    );
  }
}
export default ConstructorsStandings;
