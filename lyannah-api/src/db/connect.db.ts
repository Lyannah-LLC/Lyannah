import mongoose from "mongoose";

//Connect to MongoDB
export const connect_db = mongoose
  .connect(`${process.env.MONGO_LINK}`)
  .then((result) => console.log("connected to DB successfully" + result))
  .catch((e) => console.log("Couldn't connect to DB :" + e));
