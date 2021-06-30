import jwt from "jsonwebtoken";
import { secret } from "./config/environment";

export default (req) => {
  const header = req.req.headers.authorization;

  if (!header) {
    return {
      isAuth: false,
    };
  }

  const token = header.split(" ");

  if (!token) {
    return {
      isAuth: false,
    };
  }

  let decodeToken;

  try {
    decodeToken = jwt.verify(token[1], secret.token);
  } catch (error) {
    return { isAuth: false };
  }

  if (!!!decodeToken) {
    return {
      isAuth: false,
    };
  }

  return { isAuth: true, user: decodeToken.user };
};
