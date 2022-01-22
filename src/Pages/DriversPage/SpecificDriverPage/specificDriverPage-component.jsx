import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./specificDriverPage.styles.scss";
import "../../../root.scss";
import { calcAge, capitalize } from "./utils";

const Driver = () => {
  const location = useLocation();
  const { image } = location.state;
  const driversData = useSelector((data) => data[0].DriverStandings);
  const { pathname } = window.location;
  const pathId = pathname.slice(`${pathname.indexOf(":") + 1}`);
  const driver = driversData.find((data) => data.Driver.driverId === pathId);
  const { points, position: rank, wins } = driver;
  const {
    dateOfBirth: birthDate,
    familyName,
    givenName,
    permanentNumber: number,
    nationality,
  } = driver.Driver;
  const { name: teamName, constructorId } = driver.Constructors[0];
  const age = calcAge(birthDate);
  let data = {
    points: points,
    rank: rank,
    wins: wins,
    age: age,
    number: number,
    nationality: nationality,
    team: teamName,
  };

  return (
    <div className="driverView">
      <div className="driver">
        <img src={`${image}`} className="driver-page-picture" />
        <div
          className="driver-name"
          style={{ color: `var(--color-${constructorId})` }}
        >{`${givenName + " " + familyName}`}</div>
      </div>
      <div
        className="driver-page-content"
        style={{ borderColor: `var(--color-${constructorId})` }}
      >
        <div className="driverView-content label">
          {Object.keys(data).map((key) => (
            <div>{capitalize(key)}</div>
          ))}
        </div>
        <div className="driverView-content info">
          {Object.values(data).map((data) => (
            <div className={`info ${data}`}>{data}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Driver;
