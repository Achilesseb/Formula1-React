import NavigationLinks from "./navigation-links/navigation-links-component";
import "./navigation-component.styles.scss";
export const NavigationBar = () => {
  return (
    <nav className="navigation">
      <NavigationLinks />
    </nav>
  );
};
