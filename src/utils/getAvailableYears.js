export const getAvailableYears = () => {
  const currentYear = new Date().getFullYear();

  return Array.from({ length: 11 }, (_, index) => {
    return currentYear - 5 + index;
  });
};
