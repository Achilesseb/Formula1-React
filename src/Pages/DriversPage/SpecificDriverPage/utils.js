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
