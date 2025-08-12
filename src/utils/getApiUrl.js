export const getApiUrl = () => {
  if (process.env !== "production") return `${process.env.REACT_APP_API_LOCAL}`;
  return `${process.env.REACT_APP_API_PROD}`;
};
