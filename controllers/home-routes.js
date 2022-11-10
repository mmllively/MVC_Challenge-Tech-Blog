const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

//get all posts for homepage
router.get('/', async (req, res) => {
    //Post findAll
    const postData = await Post.findAll().catch((err) => {
       res.json(err);
    });
    const posts = postData.map((post) => post.get({plain: true}));
    res.render('homepage', {posts});

    //map through the data, serialize it

    //render appropriate view, sending it the data it needs (the posts)

});

//get single post
router.get('/post/:id', async (req, res)=> {
    try{
        const postData = await Post.findByPk(req.params.id);
        if(!postData) {
            res.status(404).json({message: 'No post with this id!'});
            return;
        }
        const post = postData.get({plain: true});
        console.log(post);
        res.render('single-post', post);
    } catch (err) {
        res.status(500).json(err);
    };
    //find a post by PK

    //serialize data
    
    //render appropriate view, sending it the data it needs (the post)
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


router.get('/signup', (req, res) => {
    if (req.session.signedUp) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });

module.exports = router;