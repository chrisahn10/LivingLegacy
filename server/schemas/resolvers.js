const User = require('../models/User');
const Post = require('../models/Post');

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
    posts: async () => {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch all posts');
      }
    },

  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      await newUser.save();
      return newUser;
    },
    createPost: async (_, { userId, postTitle, postContent }) => {
      let newPost = new Post({ user: userId, postTitle, postContent });
      await newPost.save();
      newPost = await Post.findById(newPost._id).populate('user'); // Re-fetch the post with user populated
      return newPost;
    },
    
    updateUser: async (_, { id, username, email }) => {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, email },
        { new: true }
      );
      return updatedUser;
    },
    deletePost: async (_, { id }) => {
      return await Post.findByIdAndDelete(id);
    },
  },
  User: {
    posts: (user) => Post.find({ user: user.id }),
  },
  Post: {
    user: async (post) => {
      return await User.findById(post.user);
    },
  },
  
};

module.exports = resolvers;
