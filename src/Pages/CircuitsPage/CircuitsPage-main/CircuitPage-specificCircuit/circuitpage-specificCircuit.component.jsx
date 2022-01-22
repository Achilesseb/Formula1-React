import React from "react";
import "./circuitPage-specificCircuit.styles.scss";
import CircuitsPage from "../circuitsPage-main-component";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Circuit = () => {
  const location = useLocation();
  const { image } = location.state;
  console.log(image);
  const circuitData = useSelector((data) => data[2]);
  const { pathname } = window.location;
  const pathId = pathname.slice(`${pathname.indexOf(":") + 1}`);
  const circuit = circuitData.Circuits.find((data) => {
    return data.circuitId === pathId;
  });
  return (
    <div className="circuit-information">
      <div className="circuit-top-info">
        <div className="circuit-top-info-name">{circuit.circuitName}</div>
        <img
          src={`${image}`}
          className="country-logo"
          alt="Circuit - ${data.circuitName}"
        />
      </div>
      <div className="section__3--container">
        <table className="section--3--window-table">
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Circuit;
