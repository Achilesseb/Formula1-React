import "./App.css";
import { NavigationBar } from "./navigation/navigation-component.jsx";
import IntroPage from "./Pages/introPage/introPage-main/introPage.component";
import { Route, Routes } from "react-router-dom";
import StandingsPage from "./Pages/StandingsPage/StandingsPage-main/standingsPage-component";
import DriversStandingsPage from "./Pages/StandingsPage/DriversStandingsPage/driversStandingsPage-component";
import ConstructorStandingsPage from "./Pages/StandingsPage/ConstructorsStandingsPage/constructorsStandings-component";
import CircuitsPage from "./Pages/CircuitsPage/CircuitsPage-main/circuitsPage-main-component";
import Circuit from "./Pages/CircuitsPage/CircuitsPage-main/CircuitPage-specificCircuit/circuitpage-specificCircuit.component";
import Drivers from "./Pages/DriversPage/driversPage.component";

function App() {
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
