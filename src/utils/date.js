export const formatDate = (date) => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();
  const dateConfigured = `${day > 9 ? day : `0${day}`}/${
    month > 9 ? month : `0${month}`
  }/${year}`;
  return dateConfigured;
};
