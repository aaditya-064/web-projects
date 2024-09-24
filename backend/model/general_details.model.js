import mongoose from "mongoose";

const genDetails = mongoose.Schema(
  {
    referred_by: {
      type: String,
      required: false,
    },
    client_type: {
      type: String,
      enum: ["Corporate", "Individual", "Mutual Funds"],
      required: true,
    },
    mobile_number: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Online", "Offline"],
      default: "Online",
    },
    member_branch: {
      type: String,
      enum: ["Kathmandu"],
      required: true,
    },
    pan_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    bank_details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bank_details",
    },
    address_details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address_details",
    },
    boid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "benificiary_number",
    },
  },
  { timestamps: true }
);

const genDetailsModel = mongoose.model("general_details", genDetails);
export default genDetailsModel;
