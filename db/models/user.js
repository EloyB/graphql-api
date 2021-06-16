import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    gender: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    password: { type: String, required: true },
    userType: { type: Schema.Types.ObjectId, ref: "UserType" },
  },
  {
    timestamps: true,
  }
);

export default model("User", UserSchema);
