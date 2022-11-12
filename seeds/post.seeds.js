const { Post } = require('../models');

const postData = [

  {
    title: 'TEST',
  
    text: 'Testing 234',
    user_id: 1
  },
  {
    title: 'TEST 2',
   
    text: 'Testing 345',
    user_id: 2
  },
  
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;