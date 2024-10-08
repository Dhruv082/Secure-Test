import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // MONGO_URL="mongodb://localhost:27017"
    const conn = await mongoose.connect("mongodb://localhost:27017");
    console.log(`MongoDB Connected:`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
