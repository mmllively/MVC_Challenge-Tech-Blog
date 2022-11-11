//requires a login 
//renders all posts 
//admin handlebar

//Shows user posts, create and edit

const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

//get all posts GET --gotes to all new admin
router.get('/', withAuth, async (req, res) => {
    // try {
    //   const newPost = await Post.create({
    //     ...req.body,
    //     user_id: req.session.user_id,
    //   });
  
    //   res.status(200).json(newPost);
    // } catch (err) {
    //   res.status(400).json(err);
    // }
    res.render("dashboard")
  });

module.exports = router;
  //create new posts POST --new post

  //edit posts PUT --edit post