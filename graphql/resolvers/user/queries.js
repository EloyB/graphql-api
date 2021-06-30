import { User } from "../../../db/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secret } from "../../../config/environment";

const userQueries = {
  token: async (_, { user }) => {
    const loggedInUser = await User.findOne({ email: user.email });

    if (!loggedInUser) {
      throw new Error("No user has been found with this email");
    }

    const valid = await bcrypt.compare(user.password, loggedInUser.password);

    if (!valid) {
      throw new Error("Incorrect password");
    }

    return jwt.sign({ user }, secret.token, {
      expiresIn: "1d",
    });
  },
  orderHistory: async (_, args) => {},
};

export default userQueries;
