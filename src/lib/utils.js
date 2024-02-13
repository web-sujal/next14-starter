import mongoose from "mongoose";

const connection = {};

export const connectDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`\n MongoDB connected !! DB HOST : ${db.connection.host}`);

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
