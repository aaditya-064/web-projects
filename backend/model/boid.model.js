import mongoose from "mongoose";

const boidSchema = mongoose.Schema(
  {
    benificiary_owner_identity_number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const boidModel = mongoose.model("benificiary_number", boidSchema);
export default boidModel;
