import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  loginWith: { type: String, default: "credentials" },
});


export default mongoose.models?.Users || mongoose.model("Users", UserSchema);