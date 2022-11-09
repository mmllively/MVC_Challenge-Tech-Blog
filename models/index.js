// Post will belongto one user
//Post will havemany comments
//Comment belongto one user

const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });

  
  Post.hasMany(Comment, {
    foreignKey: 'post_id',
  });


  module.exports = { User, Post, Comment };
  