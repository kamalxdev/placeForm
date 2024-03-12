import mongoose, { Schema } from "mongoose";

const QuizSchema = new Schema({
  title: { type: String,},
  fields: [],
  created_at: { type: Date, default: Date.now },
  start_date: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  state: { type: String, default: "Pending"},
  created_by: { type: Schema.Types.ObjectId, ref: "Users"},
  expiry_date: { type: Date },
  description: { type: String },
});

var Quiz: mongoose.Model<any>;

try {
  Quiz = mongoose.model('Quiz') as mongoose.Model<any>;
} catch (error) {
  Quiz = mongoose.model('Quiz', QuizSchema) as mongoose.Model<any>;
}

export default Quiz;