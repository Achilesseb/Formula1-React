import React from "react";
import "./constructorsStandings.styles.scss";
import "../../../root.scss";
import logo from "../../../navigation/navigation-links/logo.png";

class ConstructorStandingsPage extends React.Component {
  constructor(props) {
    super(props);
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
    const ConstructorStandingBody = () => {
      const ConstructorsStandingsRow = () =>
        this.state.standings.map((standing) => {
          console.log(standing);
          const { position, points } = standing;
          const { name, constructorId } = standing.Constructor;
          const trStyle = {
            backgroundColor: `var(--color-${constructorId})`,
          };
          return (
            <tr style={trStyle} className="constructors-standigs-row-item">
              <th className="constructors-standings-cell position">
                {position}
              </th>
              <th className="constructors-standings-cell name">{name}</th>
              <th className="constructors-standings-cell points">
                {points} pts
              </th>
            </tr>
          );
        });

      return (
        <tbody className="constructors-standings-page-tablebody">
          <ConstructorsStandingsRow />
        </tbody>
      );
    };
    return (
      <div className="constructors-standings-page">
        <div className="constructors-standings-page-content label">
          <div>2021 Constructors Standings</div>
        </div>
        <table className="constructors-standings-page-table">
          <ConstructorStandingBody />
        </table>
        <div className="constructors-standings-page-content f1logo">
          <img src={logo} className="logo-standings" />
        </div>
      </div>
    );
  }
}
export default ConstructorStandingsPage;
