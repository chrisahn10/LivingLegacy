const db = require('../config/connection');
const { Post, User } = require('../models');

const postData = require('./postData.json');
const userData = require('./userData.json');

const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Post', 'posts');
    await cleanDB('User', 'users');

    const createdUsers = await User.insertMany(userData);

    // Dynamically update postData with user IDs from createdUsers
    const updatedPosts = postData.map((post, index) => {
      // This is a simplistic approach; you might need to map users more carefully based on your data structure
      const userIdIndex = index % createdUsers.length; // Just an example to assign user IDs cyclically
      post.user = createdUsers[userIdIndex]._id;
      return post;
    });
    await Post.insertMany(updatedPosts);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});