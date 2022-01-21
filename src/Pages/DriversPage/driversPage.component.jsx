import React from "react";
import "./driversPage.styles.scss";
import "../../root.scss";
import alonso from "./drivers/alonso.png";

class Drivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: [],
      images: {},
    };
  }

  componentDidMount() {
    fetch("http://ergast.com/api/f1/current/driverStandings.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const dataRaw =
          result.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        const driversData = dataRaw.map((data) => data.Driver);
        const constructorsData = dataRaw.map((data) => data.Constructors);
        this.setState({ drivers: dataRaw }, () => console.log(this.state));
      });
  }

  render() {
    const DriverCard = () =>
      this.state.drivers.map((driver) => {
        const driverData = driver.Driver;
        const constructorData = driver.Constructors[0];
        console.log(constructorData);
        const trStyle = {
          backgroundImage: `url(${alonso})`,
          borderColor: `var(--color-${constructorData.constructorId})`,
        };
        return (
          <div className="card-container" style={trStyle}>
            <h1 className="card-container name">{`${
              driverData.givenName + " " + driverData.familyName
            }`}</h1>
          </div>
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
  }
}

export default Drivers;
