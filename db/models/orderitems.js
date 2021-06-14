import { Schema, model } from "mongoose";

const OrderItemsSchema = new Schema(
  {
    wine: { type: Schema.Types.ObjectId, ref: "Wine", required: true },
    order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  },
  {
    timestamps: true,
  }
);

export default model("OrderItems", OrderItemsSchema);
