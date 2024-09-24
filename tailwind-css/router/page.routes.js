import { homePage } from "../controller/page.controller.js";
import express from "express";
import path from "path";
import fs from "fs";

const filePath = path.join(__dirname, "router");
const router = express.Router();

router.get("/home", (req, res) => {
  res.render("");
});

export default router;
