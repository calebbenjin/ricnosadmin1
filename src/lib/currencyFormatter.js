export const formatMoney = (n) => {
  return "NGN " + (Math.round(n * 100) / 100).toLocaleString();
};
