import React from "react";
import { useSelector } from "react-redux";
import "./introPage-constructors.styles.scss";

const ConstructorsStandings = () => {
  const constructorsData = useSelector((data) => data[1].ConstructorStandings);
  console.log(constructorsData);
  const ConstructorStandingItems = () =>
    constructorsData
      .filter((standings) => standings.position < 5)
      .map((standing) => {
        console.log(standing);
        const { position, points } = standing;
        const { name } = standing.Constructor;
        return (
          <tbody>
            <tr className="constructors-standigs-item">
              <th className="constructors-standings-name">{`${
                position + ". " + name
              }`}</th>
              <th className="constructors-standings-points">{points} pts</th>
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
};
export default ConstructorsStandings;
