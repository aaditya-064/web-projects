import mongoose from "mongoose";

const individualDetails = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    middle_name: {
      type: String,
      required: true,
    },
    last_namge: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Prefer not to say"],
      required: true,
    },
    dob_bs: {
      type: String,
      required: true,
    },
    dob_ad: {
      type: String,
      required: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    mother_name: {
      type: String,
      required: true,
    },
    grandfather_name: {
      type: String,
      required: true,
    },
    citizenship_number: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      enum: ["Nepal"],
      required: true,
    },
    is_nrn: {
      type: Boolean,
      default: false,
      required: true,
    },
    is_minor: {
      type: Boolean,
      required: true,
    },
    citizenship_issue_place: {
      type: String,
      required: true,
    },
    citizenship_date_bs: {
      type: Date,
      required: true,
    },
    citizenship_date_ad: {
      type: Date,
      required: true,
    },
    material_status: {
      type: String,
      enum: ["Married", "Single", "Separated"],
      required: true,
    },
    spouse_name: {
      type: String,
    },
    son_name: {
      type: String,
    },
    daughter_name: {
      type: String,
    },
    daughter_in_law_name: {
      type: String,
    },
    father_in_law_name: {
      type: String,
    },
    mother_in_law_name: {
      type: String,
    },
    occupation: {
      type: String,
      enum: ["Business", "Employee", "Other"],
      required: true,
    },
    business_type: {
      type: String,
    },
    designation: {
      type: String,
    },
    contact_number: {
      type: String,
      required: true,
    },
    organization_name: {
      type: String,
      required: true,
    },
    organization_address: {
      type: String,
      required: true,
    },
    employee_id: {
      type: String,
    },
    financial_details: {
      type: String,
    },
    involvement: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const individualDetailsModel = mongoose.model(
  "individual_details",
  individualDetails
);
export default individualDetailsModel;
