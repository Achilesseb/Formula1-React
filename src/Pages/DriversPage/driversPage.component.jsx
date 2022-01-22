import React from "react";
import "./driversPage.styles.scss";
import "../../root.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { driversImages as images } from "../../utils";

const Drivers = () => {
  const driverData = useSelector((data) => data[0].DriverStandings);
  const DriverCard = () =>
    driverData.map((driver) => {
      const driverData = driver.Driver;
      const constructorData = driver.Constructors[0];
      const driverImage = images.find((image) =>
        image.includes(`${driverData.driverId}`)
      );
      const trStyle = {
        backgroundImage: `url(${driverImage})`,
        borderColor: `var(--color-${constructorData.constructorId})`,
        backgroundColor: `var(--color-${constructorData.constructorId})`,
      };
      return (
        <Link
          className="card-container"
          style={trStyle}
          to={`/drivers/:${driverData.driverId}`}
          state={{ image: driverImage }}
        >
          <h1 className="card-container name">{`${
            driverData.givenName + " " + driverData.familyName
          }`}</h1>
        </Link>
      );
    });
  return (
    <div className="drivers-page">
      <div className="card-list">
        {" "}
        <DriverCard />{" "}
      </div>
    </div>
  );
};

export default Drivers;
