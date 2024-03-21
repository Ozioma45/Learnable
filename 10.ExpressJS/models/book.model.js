const mongoose = require("mongoose");

const Book = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const BookModel = mongoose.model("Book_me", Book);

module.exports = BookModel;
