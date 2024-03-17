import mongoose from "mongoose";

export default function connect() {
  
  mongoose
    .connect(process.env.MONGO_URL as string, {
      tls: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error from mongo.config.ts ",err);
    });
}
