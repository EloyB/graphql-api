import { OrderItems } from "../../../db/models";

const orderFields = {
  Order: {
    items: async (order) => {
      const orderItems = OrderItems.find({ order: order._id });

      const items = await Wine.find({
        _id: { $in: orderItems.map(({ wine }) => wine) },
      });

      return items;
    },
  },
};

export default orderFields;
