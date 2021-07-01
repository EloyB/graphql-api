import { Order } from "../../../db/models";

const orderQueries = {
  userOrders: async (_, args, context) => {
    if (!context.isAuth) {
      throw new Error("You are not authenticated to do this action");
    }

    const orders = Order.find({ user: context.user._id });

    return orders;
  },
};

export default orderQueries;
