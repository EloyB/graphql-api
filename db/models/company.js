import { Schema, model } from "mongoose";

const CompanySchema = new Schema(
  {
    name: { type: String, required: true },
    vatNumber: { type: Number, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Company", CompanySchema);
