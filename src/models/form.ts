import mongoose, { Schema } from "mongoose";

const FormSchema = new Schema({
  title: { type: String,},
  fields: [],
});


export default mongoose.models?.forms || mongoose.model("Forms", FormSchema);