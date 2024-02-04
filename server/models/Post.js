const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    postContent: {
      type: String,
      required: 'Cannot leave empty!',
      minlength: 1,
      maxlength: 3000,
    },
    postAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [{
      commentContent: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 300,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    }],
  });

const Post = model('Post', postSchema);

module.exports = Post;