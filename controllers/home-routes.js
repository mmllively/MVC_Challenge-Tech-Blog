const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

//get all posts for homepage
router.get('/', async (req, res) => {
    try {
    //Post findAll
    const postData = await Post.findAll();

    //map through the data, serialize it
    const posts = postData.map((post) => post.get({plain: true}));
    //render appropriate view, sending it the data it needs (the posts)
    res.render('homepage', {posts, logged_in: req.session.logged_in 
    });
} catch (err) {
    res.status(500).json(err);
}

});

//get single post
router.get('/post/:id', async (req, res)=> {
    try{
        //find a post by PK
        const postData = await Post.findByPk(req.params.id, {
            include: [
                //get the user for EACH post
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        if(!postData) {
            res.status(404).json({message: 'No post with this id!'});
            return;
        }
        const post = postData.get({plain: true});
        console.log(post);
        //render appropriate view, sending it the data it needs (the post)
        res.render('single-post', {post});
    } catch (err) {
        res.status(500).json(err);
    };
    
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


router.get('/edit/:id', async (req, res) => {
   
    try{
        //find a post by PK
        const postData = await Post.findByPk(req.params.id, {
            include: [
                //get the user for EACH post
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        if(!postData) {
            res.status(404).json({message: 'No post with this id!'});
            return;
        }
        const post = postData.get({plain: true});
        console.log(post);
        //render appropriate view, sending it the data it needs (the post)
        res.render('edit-post', {post});
    } catch (err) {
        res.status(500).json(err);
    };
    
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });




  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route

  
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
  
    res.render('login');
  });
  
  
  router.get('/signup', (req, res) => {
 
    res.render('signup');
  });
  
  





  
module.exports = router;