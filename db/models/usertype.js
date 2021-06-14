import { Schema, model } from "mongoose";

const UserTypeSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("UserType", UserTypeSchema);
