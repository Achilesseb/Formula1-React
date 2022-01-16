import "./App.css";
import { NavigationBar } from "./navigation/navigation-component.jsx";
import IntroPage from "./Pages/introPage/introPage-main/introPage.component";
import { Route, Routes } from "react-router-dom";
import StandingsPage from "./Pages/StandingsPage/StandingsPage-main/standingsPage-component";
import DriversStandingsPage from "./Pages/StandingsPage/DriversStandingsPage/driversStandingsPage-component";

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
            path="standings/constructors"
            element={<DriversStandingsPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
