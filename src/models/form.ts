import mongoose, { Schema } from "mongoose";

const FormSchema = new Schema({
  title: { type: String,},
  fields: [],
});

var Forms: mongoose.Model<any>;

try {
  Forms = mongoose.model('Forms') as mongoose.Model<any>;
} catch (error) {
  Forms = mongoose.model('Forms', FormSchema) as mongoose.Model<any>;
}

export default Forms;