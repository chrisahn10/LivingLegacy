const User = require('../models/User');
const Post = require('../models/Post');
const { signToken, AuthenticationError } = require('../utils/auth.js')

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch all users');
      }
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async () => {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch all posts');
      }
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
      // Create a user
      console.log("the addUser mutation was called")
      const user = await User.create({ username, email, password });
      console.log("we awaited User and created one", user)
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      console.log(user);
      // Return an `Auth` object that consists of the signed token and user's information
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

    addPost: async (_, { userId, postTitle, postContent }) => {
      let newPost = new Post({ user: userId, postTitle, postContent });
      await newPost.save();
      newPost = await Post.findById(newPost._id).populate('user'); // Re-fetch the post with user populated
      return newPost;
    },
    addComment: async (parent, { postId, commentContent }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentContent, user: context.user.username },
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
