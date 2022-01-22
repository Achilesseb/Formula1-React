import "./App.css";
import { NavigationBar } from "./navigation/navigation-component.jsx";
import IntroPage from "./Pages/introPage/introPage-main/introPage.component";
import { matchPath, Route, Routes } from "react-router-dom";
import StandingsPage from "./Pages/StandingsPage/StandingsPage-main/standingsPage-component";
import DriversStandingsPage from "./Pages/StandingsPage/DriversStandingsPage/driversStandingsPage-component";
import ConstructorStandingsPage from "./Pages/StandingsPage/ConstructorsStandingsPage/constructorsStandings-component";
import CircuitsPage from "./Pages/CircuitsPage/CircuitsPage-main/circuitsPage-main-component";
import Circuit from "./Pages/CircuitsPage/CircuitsPage-main/CircuitPage-specificCircuit/circuitpage-specificCircuit.component";
import Drivers from "./Pages/DriversPage/driversPage.component";
import { useSelector } from "react-redux";
import Driver from "./Pages/DriversPage/SpecificDriverPage/specificDriverPage-component";

function App() {
  const data = useSelector((data) => data[0].DriverStandings);
  const idData = data.map((data) => data.Driver.driverId);
  return (
    <div className="App">
      <div className="header">
        <NavigationBar />
      </div>
      <div className="App-body">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route exact path="/standings" element={<StandingsPage />} />
          <Route path="/standings/drivers" element={<DriversStandingsPage />} />
          <Route
            exact
            path="/standings/constructors"
            element={<ConstructorStandingsPage />}
          />
          <Route eaxct path="/circuits" element={<CircuitsPage />} />
          <Route exact path="/circuits/:americas" element={<Circuit />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path={`/drivers/:id`} element={<Driver />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
