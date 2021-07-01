import { Order, OrderItems } from "../../../db/models";

const orderMutations = {
  createOrder: async (_, { order }, context) => {
    if (!context.isAuth) {
      throw new Error("User is not authenticated to do this action");
    }

    const newOrder = Order.create({ user: context.user._id });

    order.items.forEach((item) => {
      OrderItems.create({
        wine: item._id,
        order: newOrder._id,
      });
    });

    return newOrder;
  },
};

export default orderMutations;
