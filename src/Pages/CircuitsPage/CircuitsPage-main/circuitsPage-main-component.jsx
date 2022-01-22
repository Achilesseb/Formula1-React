import React from "react";
import "./circuitsPage-main.styles.scss";
import "../../../root.scss";
import { Link } from "react-router-dom";
import { ProgressBar } from "./progressBar/circuitsPage-progressbar-component";
import { circuitLogo } from "../../../utils";

class CircuitsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circuits: [],
      page: 1,
      numberOfPages: 0,
    };
    this.handleChangeRight = this.handleChangeRight.bind(this);
    this.handleChangeLeft = this.handleChangeLeft.bind(this);
  }
  async componentDidMount() {
    await fetch("http://ergast.com/api/f1/2021/circuits.json")
      .then((res) => res.json())
      .then((result) => {
        const circuitData = result.MRData.CircuitTable.Circuits;
        this.setState({ circuits: circuitData }, () => console.log(this.state));
      });
  }
  handleChangeRight() {
    if (this.state.page === this.state.numberOfPages) return;
    this.setState({ page: this.state.page + 1 }, () => this.state.page);
  }
  handleChangeLeft() {
    if (this.state.page === 1) return;
    this.setState({ page: this.state.page - 1 }, () => this.state.page);
  }
  render() {
    const totalPages = Math.ceil(this.state.circuits.length / 6);
    this.state.numberOfPages = totalPages;
    const start = (this.state.page - 1) * 6;
    const end = this.state.page * 6;
    const circuitsOnThisPage = this.state.circuits.slice(start, end);
    console.log(circuitsOnThisPage);

    const CircuitsDisplayed = () =>
      circuitsOnThisPage.map((circuit) => {
        const countryLogo = circuitLogo.find((logo) =>
          logo.includes(circuit.circuitId)
        );
        return (
          <div
            className="btn-circuit"
            style={{
              backgroundImage: `url(${countryLogo})`,
            }}
          >
            <Link
              to={`/circuits/:${circuit.circuitId}`}
              className="circuit-name"
              state={{ image: countryLogo }}
            >
              {circuit.circuitName}
            </Link>
          </div>
        );
      });
    return (
      <div className="circuits-big">
        <div className="circuits-small">
          <div className="pagination-buttons">
            <button className="paginate left" onClick={this.handleChangeLeft}>
              <i></i>
              <i></i>
            </button>
          </div>
          <div className="circuits-list">
            <CircuitsDisplayed />
          </div>
          <div className="pagination-buttons">
            <button className="paginate right" onClick={this.handleChangeRight}>
              <i></i>
              <i></i>
            </button>
          </div>
        </div>
        <div className="progress">
          <ProgressBar props={this.state} />
        </div>
      </div>
    );
  }
}
export default CircuitsPage;
