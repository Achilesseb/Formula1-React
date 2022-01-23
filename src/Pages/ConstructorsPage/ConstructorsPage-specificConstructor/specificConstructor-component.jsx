import React from "react";
import { useLocation } from "react-router-dom";
import "./specificConstructor.styles.scss";
import { moreDataConstructors } from "../../../data";
import { constructorsLogo, findImageFunction } from "../../../utils";
import "../../../root.scss";

const SpecificConstructor = () => {
  const { images, data } = useLocation().state;
  const pathname = useLocation().pathname;
  const pathId = pathname.slice(pathname.indexOf(":") + 1);
  const thisConstructorData = moreDataConstructors.find(
    (constructor) => constructor.constructorsId === pathId
  );
  const { position, points } = data;
  const { nationality } = data.Constructor;
  thisConstructorData.position = position;
  thisConstructorData.points = points;
  thisConstructorData.nationality = nationality;
  const thisConstructorLogo = findImageFunction(constructorsLogo, pathId);
  const thisConstructorImage = images.find((image) => image.includes(pathId));
  let entries = Object.entries(thisConstructorData);
  console.log(entries);
  const finalEntries = entries.map((entry) =>
    entry.map((data) => data.replace("_", " "))
  );
  const TableRowData = () => {
    const TableCellsData = () =>
      finalEntries
        .filter((entry, index) => index > 0)
        .map((entry) => (
          <tr className="constructor-data-row">
            {entry.map((entry) => (
              <td className="constructor-data-cell">{entry}</td>
            ))}
          </tr>
        ));
    return <TableCellsData />;
  };

  return (
    <div className="specific-constructor-data">
      <div
        className="constructor-name"
        style={{ color: `var(--color-${data.Constructor.constructorId})` }}
      >
        {data.Constructor.name}
      </div>
      <div>
        <img
          className="constructor-car"
          src={thisConstructorImage}
          alt="constructor-car"
        />
      </div>
      <table
        className="constructor-data-table"
        style={{
          borderColor: `var(--color-${data.Constructor.constructorId})`,
        }}
      >
        <tbody className="constructor-data-tbody">
          <TableRowData />
        </tbody>
      </table>
      <img
        className="constructor-logo"
        src={thisConstructorLogo}
        alt="constructor-logo"
      />
    </div>
  );
};

export default SpecificConstructor;
