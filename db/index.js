import Mongoose from "mongoose";
import { mongo } from "../config/environment";

let isConnected;
let db;

const connectDB = async () => {
  if (isConnected) return db;

  try {
    db = await Mongoose.connect(mongo.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    isConnected = db.connections[0].readyState;
    return db;
  } catch (error) {
    throw new Error(error);
  }
};

export default connectDB;
