import React from "react";
import "./constructorsStandings.styles.scss";
import "../../../root.scss";
import logo from "../../../navigation/navigation-links/logo.png";
import { useSelector } from "react-redux";

const ConstructorStandingsPage = () => {
  const constructorsStandingsData = useSelector(
    (data) => data[1].ConstructorStandings
  );
  const ConstructorStandingBody = () => {
    const ConstructorsStandingsRow = () =>
      constructorsStandingsData.map((standing) => {
        let data = [];
        const { position, points } = standing;
        const { name, constructorId } = standing.Constructor;
        data.push([position, name, points]);
        const trStyle = {
          backgroundColor: `var(--color-${constructorId})`,
        };
        return (
          <tr style={trStyle} className="constructors-standigs-row-item">
            {data[0].map((data) => (
              <th className="constructors-standings-cell">{data}</th>
            ))}
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
