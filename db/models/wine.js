import { Schema, model } from "mongoose";

const WineSchema = new Schema(
  {
    name: { type: String, required: true },
    vineyard: { type: Schema.Types.ObjectId, ref: "Vineyard", required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    discount: { type: Number },
    imageUrl: { type: String, required: true },
    rating: { type: Number, required: true },
    grape: { type: Schema.Types.ObjectId, ref: "Grape", required: true },
    available: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Wine", WineSchema);
