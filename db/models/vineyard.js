import { Schema, model } from "mongoose";

const VineyardSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    yearOfIncorporation: { type: Number, required: true },
    story: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Vineyard", VineyardSchema);
