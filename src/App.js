import "./App.css";
import { NavigationBar } from "./navigation/navigation-component.jsx";
import { Route, Routes } from "react-router-dom";

import IntroPage from "./Pages/introPage/introPage-main/introPage.component";
import StandingsPage from "./Pages/StandingsPage/StandingsPage-main/standingsPage-component";
import DriversStandingsPage from "./Pages/StandingsPage/DriversStandingsPage/driversStandingsPage-component";
import ConstructorStandingsPage from "./Pages/StandingsPage/ConstructorsStandingsPage/constructorsStandings-component";
import CircuitsPage from "./Pages/CircuitsPage/CircuitsPage-main/circuitsPage-main-component";
import Circuit from "./Pages/CircuitsPage/CircuitsPage-main/CircuitPage-specificCircuit/circuitpage-specificCircuit.component";
import Drivers from "./Pages/DriversPage/driversPage.component";
import Driver from "./Pages/DriversPage/SpecificDriverPage/specificDriverPage-component";
import Constructors from "./Pages/ConstructorsPage/ConstructorsPage-main/constructorsPage-component";
import SpecificConstructor from "./Pages/ConstructorsPage/ConstructorsPage-specificConstructor/specificConstructor-component";

import { useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";

function App() {
  const data = useSelector((data) => data);
  console.log(data);
  if (Object.keys(data).length === 0)
    return (
      <div className="App">
        <div className="header">
          <NavigationBar />
        </div>
        <div className="App-body">
          <PulseLoader color="red" size={100} />
        </div>
      </div>
    );
  else if (data.length > 0)
    return (
      <div className="App">
        <div className="header">
          <NavigationBar />
        </div>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route exact path="/standings" element={<StandingsPage />} />
            <Route
              path="/standings/drivers"
              element={<DriversStandingsPage />}
            />
            <Route
              exact
              path="/standings/constructors"
              element={<ConstructorStandingsPage />}
            />
            <Route eaxct path="/circuits" element={<CircuitsPage />} />
            <Route path="/circuits/:id" element={<Circuit />} />
            <Route exact path="/drivers" element={<Drivers />} />
            <Route path={`/drivers/:id`} element={<Driver />} />
            <Route exact path="/constructors" element={<Constructors />} />
            <Route path="/constructors/:id" element={<SpecificConstructor />} />
          </Routes>
        </div>
      </div>
    );
}

export default App;
