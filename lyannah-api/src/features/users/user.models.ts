import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  business: { type: String, default: "none" },
  isVerified: { type: Boolean, default: false },
});

export const UserModel = mongoose.model("Users", userSchema);
