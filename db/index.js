import Mongoose from "mongoose";
import { mongo } from "../config/environment";

const connectDB = async () => {
  await Mongoose.connect(mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
    .then((x) => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err);
    });
};

export default connectDB;
