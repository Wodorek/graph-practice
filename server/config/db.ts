import mongoose from 'mongoose';

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI as string);

  console.log(`Mongo connected:${connection.connection.host}`);
};

export default connectDB;
