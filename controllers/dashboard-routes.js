//requires a login 
//renders all posts 
//admin handlebar

//Shows user posts, create and edit

const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

//get all posts GET --gotes to all new admin
router.get('/', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
        user_id: req.session.user_id
      },
      include: [{model: User}]
    });

    const posts = postData.map((post) => post.get({plain: true}));
    res.render("dashboard",{posts, logged_in: req.session.logged_in });

} catch (err) {
  res.status(400).json(err);
}
});




module.exports = router;
  //create new posts POST --new post

  //edit posts PUT --edit post