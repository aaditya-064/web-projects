import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import router from "./router/page.routes.js";
const app = express();

app.use(express.json());
app.use("/api", router);

db.then(() => {
  console.log("DATABASE CONNECTED");
}).catch((err) => {
  console.log(err);
});

app.listen(
  config.PORT,
  console.log(`SERVER IS RUNNING AT PORT ${config.PORT}`)
);
