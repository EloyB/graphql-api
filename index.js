import { mongo, port } from "./config/environment/index";
import app from "./app";
import connectDB from "./db";
import Mongoose from "mongoose";

const start = async () => {
  try {
    console.log("Connecting to database");
    // await connectDB;
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
    console.log("Connected to database");

    await app.listen(port);
    console.log(`Server running at port ${port}`);
  } catch (error) {
    console.log("Server not running");
  }
};

start();
