import mongoose from "mongoose";

const addressDetails = mongoose.Schema(
  {
    country_of_residence: {
      type: String,
      enum: ["Nepal"],
      default: "Nepal",
      required: true,
    },
    state: {
      type: String,
      enum: [
        "Province 1",
        "Province 2",
        "Province 3",
        "Province 4",
        "Province 5",
        "Province 6",
        "Province 7",
      ],
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    municipality: {
      type: String,
      required: true,
    },
    ward_number: {
      type: Number,
      required: true,
    },
    street_or_tole: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const addressDetailsModel = mongoose.model("address_details", addressDetails);
export default addressDetailsModel;
