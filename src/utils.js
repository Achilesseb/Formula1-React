export const calcAge = (date) => {
  const today = new Date();
  const bday = new Date(date);
  let age = today.getFullYear() - bday.getFullYear();
  const m = today.getMonth() - bday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
    age--;
  }
  return age;
};
export const capitalize = (string) => {
  return `${string.slice(0, 1).toUpperCase() + string.slice(1)}`;
};
function importAll(r) {
  return r.keys().map(r);
}
export const driversImages = importAll(
  require.context("./Pages/DriversPage/drivers", false, /\.(png|jpe?g|svg)$/)
);

export const circuitLogo = importAll(
  require.context(
    "./Pages/CircuitsPage/CircuitsLogo/country-logo",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
