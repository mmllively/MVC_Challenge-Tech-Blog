const { User } = require('../models');

const userData = [

  {
    username: 'peanutMnMs43',
    email: 'gholmes@yahoo.com',
    password: 'Shorts123',
  },
  {
    username: 'crunchMnMs43',
    email: 'glively@yahoo.com',
    password: 'Pants123',
  },
  
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;