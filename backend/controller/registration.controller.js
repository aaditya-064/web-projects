import addressDetailsModel from "../model/address_details.model.js";
import bankDetailsModel from "../model/bank_details.model.js";
import boidModel from "../model/boid.model.js";
import genDetailsModel from "../model/general_details.model.js";

export const addressDetails = async (req, res) => {
  try {
    const postData = await addressDetailsModel.create({ ...req.body });
    res.json(postData);
  } catch (err) {
    res.status(err?.statusCode).json({ err: err?.message });
  }
};

export const bankDetails = async (req, res) => {
  const postData = await bankDetailsModel.create({ ...req.body });
  res.json(postData);
};

export const benificiaryNumber = async (req, res) => {
  const postData = await boidModel.create({ ...req.body });
  res.json(postData);
};

export const genDetails = async (req, res) => {
  try {
    const postData = await genDetailsModel.create({ ...req.body });
    res.json(postData);
  } catch (err) {
    console.log(err);
  }
};

export const getDetails = async (req, res) => {
  try {
    const findData = await genDetailsModel
      .find()
      .populate("bank_details")
      .populate("address_details")
      .populate("boid");
    res.json(findData);
  } catch (err) {
    console.log(err);
  }
};
