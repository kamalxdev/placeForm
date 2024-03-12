import mongoose, { Schema } from "mongoose";

const ResponseSchema = new Schema({
  responded_user: { type: Schema.Types.ObjectId, ref: "Users" },
  response:[],
  responded_at: { type: Date, default: Date.now },
  form: { type: Schema.Types.ObjectId, ref: "Forms" },
  quiz: { type: Schema.Types.ObjectId, ref: "Quiz" },
});

var Responses: mongoose.Model<any>;

try {
  Responses = mongoose.model('Responses') as mongoose.Model<any>;
} catch (error) {
  Responses = mongoose.model('Responses', ResponseSchema) as mongoose.Model<any>;
}

export default Responses;