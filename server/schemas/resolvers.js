const User = require('../models/User');
const Post = require('../models/Post');
const { signToken, AuthenticationError } = require('../utils/auth.js')

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw AuthenticationError;
    },

  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addPost: async (parent, { postContent }, context) => {
      if (context.user) {
        const post = await Post.create({
          postContent,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentContent }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentContent, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError;
    },
    removePost: async (_, { id }) => {
      return await Post.findByIdAndDelete(id);
    },
    removeComment: async (parent, { id, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { commentId: id },
          {
            $pull: {
              comments: {
                commentId: id,
                user: context.user.username,
              },
            },
          },
        )
      }
    }
  },

  
};

module.exports = resolvers;
