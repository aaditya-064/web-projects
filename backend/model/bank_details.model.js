import mongoose from "mongoose";

const bankDetails = mongoose.Schema(
  {
    bank: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    account_type: {
      type: String,
      required: true,
      enum: ["Current", "Transactional", "Settlement", "Collateral", "Saving"],
    },
    account_number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const bankDetailsModel = mongoose.model("bank_details", bankDetails);
export default bankDetailsModel;
