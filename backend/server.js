import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import regRoute from "./routes/registration.router.js";

const app = express();
app.use(express.json());
app.use("/", regRoute);

db.then(() => {
  console.log("DATABASE CONNECTED");
}).catch((err) => {
  console.log(err);
});

app.listen(
  config.PORT,
  console.log(`SERVER IS RUNNING AT PORT ${config.PORT}`)
);
