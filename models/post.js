const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: String,
  content: String,
  tags: [{ String }],
  type: { type: String },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
