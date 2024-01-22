import mongoose, { Schema } from "mongoose";

const FormSchema = new Schema({
  title: { type: String,},
  fields: [],
  created_at: { type: Date, default: Date.now },
  start_date: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  state: { type: String, default: "Pending"},
  created_by: { type: Schema.Types.ObjectId, ref: "Users"},
  Attempts:{ type: Number, default: 0},
  expiry_date: { type: Date },
  description: { type: String },
});

var Forms: mongoose.Model<any>;

try {
  Forms = mongoose.model('Forms') as mongoose.Model<any>;
} catch (error) {
  Forms = mongoose.model('Forms', FormSchema) as mongoose.Model<any>;
}

export default Forms;