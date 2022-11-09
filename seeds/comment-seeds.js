const { Comment } = require('../models');

const commentData = [

  {

    content: 'Testing 234',
    user_id: 1,
    post_id: 1 
  },
  {
    content: 'Testing 345',
    user_id: 2,
    post_id: 2
  },
  
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;