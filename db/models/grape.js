import { Schema, model } from "mongoose";

const GrapeSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Grape", GrapeSchema);
