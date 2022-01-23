import React from "react";
import { useSelector } from "react-redux";
import "./constructorsPage.styles.scss";

import { constructorsImages } from "../../../utils";
import { Link } from "react-router-dom";
import "../../../root.scss";
const Constructors = () => {
  const rawData = useSelector((data) => data[1]);
  const constructorsData = rawData.ConstructorStandings;

  return (
    <div className="teams-list">
      {constructorsData.map((data) => (
        <Link
          style={{
            backgroundColor: `var(--color-${data.Constructor.constructorId})`,
            borderColor: `var(--color-${data.Constructor.constructorId})`,
          }}
          className="team-link"
          to={`/constructors/:${data.Constructor.constructorId}`}
          state={{ images: constructorsImages, data: data }}
        >
          <div className="team-name">{data.Constructor.name}</div>
          <img
            className="team-car"
            src={constructorsImages.find((image) =>
              image.includes(`${data.Constructor.constructorId}`)
            )}
            alt="team-car"
          />
        </Link>
      ))}
    </div>
  );
};
export default Constructors;
