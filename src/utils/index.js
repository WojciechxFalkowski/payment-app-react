export const formatCurrency = (value) => {
  const number = Number(value);

  return new Intl.NumberFormat("usa", {
    style: "currency",
    currency: "USD",
  }).format(number);
};
