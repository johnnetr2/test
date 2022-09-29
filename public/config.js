require("dotenv").config();

console.log("env", process.env.API_BASE_URL);

export const config = {
  API_BASE_URL: process.env.API_BASE_URL,
};
