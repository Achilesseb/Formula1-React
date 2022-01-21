import React from "react";
import "./circuitPage-specificCircuit.styles.scss";
import CircuitsPage from "../circuitsPage-main-component";
import { useParams } from "react-router-dom";

const Circuit = (props) => {
  console.log(props);
  // this.state.circuits.find((element) => (element.circuitId = "americas"));
  const id = window.location.id;
  console.log(id);

  return (
    <section className="section--3--data">
      <div className="bg-image--1"></div>
      <div className="circuit-information">
        <div className="section__3--title--window"> GRAND PRIX</div>
        {/* <div className="section__3--container">
            <img
              src="/images/circuits-layout/${data.circuitId}.png"
              className="circuit-track"
              alt="Circuit - ${data.circuitName}"
            />
            <table className="section--3--window-table"></table>
          </div> */}
      </div>
    </section>
  );
};
export default Circuit;
