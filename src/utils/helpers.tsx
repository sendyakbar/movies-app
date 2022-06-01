const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (dateString: string) => {
  const d = new Date(dateString);
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${month} ${date}, ${year}`;
};

export const getYear = (dateString: string) => {
  const d = new Date(dateString);
  const year = d.getFullYear();

  return year;
};
