import { Company, Order, UserType } from "../../../db/models";

const userFields = {
  User: {
    company: async (user) => {
      const company = await Company.findById(user.company);

      return company;
    },
    userType: async (user) => {
      const userType = await UserType.findById(user.userType);

      return userType;
    },
    orders: async (user) => {
      const orders = await Order.find({ user: user._id });

      return orders;
    },
  },
};

export default userFields;
