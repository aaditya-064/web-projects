import fs from "fs";
import path from "path";

export const homePage = async (req, res) => {
  res.sendFile("index.html");
};
