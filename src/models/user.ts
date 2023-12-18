import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  loginWith: { type: String, default: "google" },
});


export default mongoose.models?.Users || mongoose.model("Users", UserSchema);