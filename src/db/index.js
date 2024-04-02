import mongoose from "mongoose";
import { config } from "dotenv";
// import DB_NAME1 from '../constants.js'
const DB_NAME1 = "node-project";
config();
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME1}`
    );
    console.log(
      `mongodb connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO connection error", error);
    process.exit(1);
  }
};

export default connectDB;