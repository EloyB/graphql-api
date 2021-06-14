import { Schema, model } from "mongoose";

const WineCategoriesSchema = new Schema(
  {
    wine: { type: Schema.Types.ObjectId, ref: "Wine", required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  {
    timestamps: true,
  }
);

export default model("WineCategories", WineCategoriesSchema);
