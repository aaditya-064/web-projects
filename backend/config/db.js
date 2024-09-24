import config from "./config.js";
import mongoose, { mongo } from "mongoose";

const db = mongoose.connect(config.DB_URL);
export default db;
