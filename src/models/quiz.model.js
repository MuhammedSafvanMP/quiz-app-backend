const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  question: {
    type: String,
    required: true,
    trim: true,
  },
  options: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  answer: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        return this.options.includes(value);
      },
      message: "Answer must be one of the options.",
    },
  },
  explanation: {
    type: String,
    trim: true,
  },
  userAnswer: {
    type: String,
    trim: true,
  },
  isAnswer:{
     type: [Number],
     enum: [0,1,2],
     default: 0
  },
  count: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {timestamps: true});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
