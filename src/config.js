export default {
  API_BASE_URL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://agile-reaches-26051.herokuapp.com/api",
  TOKEN_KEY: process.env.TOKEN_KEY || "random-auth-token"
};
