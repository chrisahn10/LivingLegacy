const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ObjectId = Schema.Types.ObjectId;

const postSchema = new Schema({
    postTitle: String,
    postContent: {
      type: String,
      required: false,
      minlength: 1,
      maxlength: 300,
    },
    date: Date,
    time: String,
    user: { type: ObjectId, ref: 'User' }, // Reference to the User who created the post
    likes: [{ type: ObjectId, ref: 'User' }], // Array of Users who liked the post
    comments: [{
      commentContent: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 300,
      },
      date: Date,
      time: String,
      user: { type: ObjectId, ref: 'User' }, // Reference to the User who commented
    }],
  });

const Post = model('Post', postSchema);

module.exports = Post;