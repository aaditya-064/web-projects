import express from "express";
import {
  addressDetails,
  bankDetails,
  benificiaryNumber,
  genDetails,
  getDetails,
} from "../controller/registration.controller.js";
const regRoute = express.Router();

regRoute.post("/address", addressDetails);
regRoute.post("/bank/details", bankDetails);
regRoute.post("/benificiary", benificiaryNumber);
regRoute.post("/general", genDetails);
regRoute.get("/get/general", getDetails);

export default regRoute;
