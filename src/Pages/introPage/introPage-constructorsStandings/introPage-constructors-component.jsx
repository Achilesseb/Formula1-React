import React from "react";
import { useSelector } from "react-redux";
import "../introPage-driversStandings/introPage-standings.styles.scss";

const ConstructorsStandings = () => {
  const constructorsData = useSelector((data) => data[1].ConstructorStandings);
  console.log(constructorsData);
  const ConstructorStandingItems = () =>
    constructorsData
      .filter((standings) => standings.position < 5)
      .map((standing) => {
        let data = [];
        const { points } = standing;
        const { name: teamName } = standing.Constructor;
        data.push([teamName, points]);
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
        2021 Constructors Standings
      </div>
      <table className="constructors-standings-table">
        <tbody className="constructors-standings-body">
          <ConstructorStandingItems />
        </tbody>
      </table>
    </div>
  );
};
export default ConstructorsStandings;
