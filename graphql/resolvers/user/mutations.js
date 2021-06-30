import { User } from "../../../db/models";
import bcrypt from "bcrypt";

const userMutations = {
  signUpUser: async (_, { user }) => {
    const existingUser = User.findOne({ email: user.email });

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    if (user.password !== user.repeatPassword) {
      throw new Error("Passwords are not matching");
    }

    const newUser = await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: await bcrypt.hash(user.password, 11),
    });

    return newUser;
  },
  changePassword: async (_, args) => {},
};

export default userMutations;
