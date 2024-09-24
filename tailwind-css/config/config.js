import dotenv from "dotenv";
dotenv.config();

const data = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};

export default data;
