// Post will belongto one user
//Post will havemany comments
//Comment belongto one user

const User = require('./User');
const Gallery = require('./Comment');
const Painting = require('./Post');

Post.hasMany(Comment, {
    foreignKey: 'comment_id',
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Comment.belongsto(User, {
    foreignKey: 'user_id',
  });
  
  module.exports = { User, Gallery, Painting };
  