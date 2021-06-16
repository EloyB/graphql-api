import { mongo, port } from "./config/environment/index";
import app from "./app";
import connectDB from "./db";

const start = async () => {
  try {
    console.log("Connecting to database");
    await connectDB;
    console.log("Connected to database");

    await app.listen(port);
    console.log(`Server running at port ${port}`);
  } catch (error) {
    console.log("Server not running");
  }
};

start();
