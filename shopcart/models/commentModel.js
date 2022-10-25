const mongoose = require("mongoose");

const notesSchema = {
  title: String,
  content: String
}

const Note = mongoose.model('Comment', commentSchema);

module.exports= Comment;