import React from "react";
import "./circuitPage-specificCircuit.styles.scss";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  circuitLayouts,
  findImageFunction,
  capitalize,
} from "../../../../utils";
import { moreDataCircuits } from "../../../../data";
import wall5 from "../../CircuitsLogo/wall5.jpg";

const Circuit = () => {
  const location = useLocation();
  const { image } = location.state;
  const circuitData = useSelector((data) => data[2]);
  const { pathname } = window.location;
  const pathId = pathname.slice(`${pathname.indexOf(":") + 1}`);
  const circuit = circuitData.Circuits.find((data) => {
    return data.circuitId === pathId;
  });
  const circuitImage = findImageFunction(circuitLayouts, pathId);
  const moreCircuitData = moreDataCircuits.find(
    (circuit) => circuit.circuitId === pathId
  );
  const { locality, country } = circuit.Location;
  const rawKeys = Object.keys(moreCircuitData);
  const rawValues = Object.values(moreCircuitData);
  let keys = rawKeys.map((key) => key.replace("_", " "));
  const values = rawValues.map((value) => {
    return value.toString().includes(".") ? `${value} km` : value;
  });
  values.push(locality, country);
  keys.push("Locality", "Country");
  return (
    <div className="circuit-information">
      <div className="circuit-top-info">
        <div className="circuit-top-info-name">{circuit.circuitName}</div>
        <div className="country-logo-box">
          <img
            src={`${image}`}
            className="country-logo"
            alt="Circuit - ${data.circuitName}"
          />
        </div>
      </div>
      <div className="circuit-bottom-info">
        <div className="circuit-layout-box">
          <img
            src={`${circuitImage}`}
            className="circuit-layout"
            alt="Circuit - ${data.circuitName}"
          />
        </div>
        <table className="circuit-bottom-info-table">
          <tbody className="circuit-bottom-info-tbody">
            <tr className="circuit-bottom-info-row ">
              {keys
                .filter((key, index) => index > 0)
                .map((key) => (
                  <td className="circuit-bottom-info-row keys">
                    {capitalize(key)}
                  </td>
                ))}
            </tr>
            <tr className="circuit-bottom-info-row ">
              {values
                .filter((values, index) => index > 0)
                .map((value) => {
                  return (
                    <td className="circuit-bottom-info-row values">{value}</td>
                  );
                })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Circuit;
