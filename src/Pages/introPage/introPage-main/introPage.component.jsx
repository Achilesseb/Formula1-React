import "./intropage-component.styles.scss";
import ConstructorsStandings from "../introPage-constructorsStandings/introPage-constructors-component";
import car from "./f12022-car.png";
import Standings from "../introPage-driversStandings/introPage-standings-component";

const IntroPage = () => {
  return (
    <div className="intropage">
      <div className="intropage-message">
        <h1 className="highlight">Immerse</h1>
        <h2>in the</h2>
        <h1 className="highlight">speed</h1>
        <h2>of</h2>
        <h1 className="highlight">Formula 1</h1>
      </div>

      <div className="intropage-preview">
        <Standings />
        <img className="car" src={car} />
        <ConstructorsStandings />
      </div>
    </div>
  );
};
export default IntroPage;
