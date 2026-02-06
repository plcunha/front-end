const findMaxDate = (date1, date2) => (date1 > date2 ? date1 : date2);

const calculateDateInterval = (date1, date2) => {
  const startDate = new Date(Math.min(date1, date2));
  const endDate = new Date(Math.max(date1, date2));

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

const addDaysToDate = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const formatDate = (date) => date.toLocaleDateString("pt-BR");

const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toLocaleString();
};
