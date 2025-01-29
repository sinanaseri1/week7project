const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title for your book."],
  },
  author: {
    type: String,
    required: [true, "Please enter an author for your book."],
  },
  read: {
    type: String,
    default: "unread",
  },
});

module.exports = mongoose.model("Book", bookSchema);
