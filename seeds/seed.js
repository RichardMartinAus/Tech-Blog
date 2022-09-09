const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

//   Seed users
    for (const user of userData) {
    await User.create({
        ...user,
        individualHooks: true,
        returning: true,
    });
  };

//   Seed posts
    for (const post of postData) {
    await Post.create({
        ...post,
        individualHooks: true,
        returning: true,
    });
  };

//   Seed comments
    for (const comment of commentData) {
    await Comment.create({
        ...comment,
        individualHooks: true,
        returning: true,
    });
  };


  process.exit(0);
};

seedDatabase();
