const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    read: {
      type: Boolean,
      default: false
    },
    amazonLink: {
      type: String,
      default: ''
    },
    storyline: {
      type: String,
      default: ''
    },
    // If you want to associate a book with a user:
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);
