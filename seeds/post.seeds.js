const { Post } = require('../models');

const postData = [

  {
    title: 'TEST',
    author: 'Reid',
    text: 'Testing 234',
    user_id: 1
  },
  {
    title: 'TEST 2',
    author: 'Elliot',
    text: 'Testing 345',
    user_id: 2
  },
  
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;