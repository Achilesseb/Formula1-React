import "./App.css";
import { NavigationBar } from "./navigation/navigation-component.jsx";
import IntroPage from "./Pages/introPage/introPage-main/introPage.component";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import StandingsPage from "./Pages/StandingsPage/StandingsPage-main/standingsPage-component";
import DriversStandingsPage from "./Pages/StandingsPage/DriversStandingsPage/driversStandingsPage-component";
import { StandingsPageOptions } from "./Pages/StandingsPage/StandingsPage-options/standingsPage-options-component";

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavigationBar />
      </div>
      <div className="App-body">
        <div>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route exact path="/standings" element={<StandingsPage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
