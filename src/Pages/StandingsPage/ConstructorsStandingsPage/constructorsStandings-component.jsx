import React from "react";
import "./constructorsStandings.styles.scss";
import "../../../root.scss";
import logo from "../../../navigation/navigation-links/logo.png";

const ConstructorStandingsPage = () => {
  const constructorsStandingsData = useSelector(
    (data) => data[1].ConstructorStandings
  );
  const ConstructorStandingBody = () => {
    const ConstructorsStandingsRow = () =>
      constructorsStandingsData.map((standing) => {
        const { position, points } = standing;
        const { name, constructorId } = standing.Constructor;
        const trStyle = {
          backgroundColor: `var(--color-${constructorId})`,
        };
        return (
          <tr style={trStyle} className="constructors-standigs-row-item">
            <th className="constructors-standings-cell position">{position}</th>
            <th className="constructors-standings-cell name">{name}</th>
            <th className="constructors-standings-cell points">{points} pts</th>
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
};
export default ConstructorStandingsPage;
