import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String },
    shippingAddress: { type: String },
    gender: { type: String },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    password: { type: String, required: true },
    userType: { type: Schema.Types.ObjectId, ref: "UserType" },
  },
  {
    timestamps: true,
  }
);

export default model("User", UserSchema);
