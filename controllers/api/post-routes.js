
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // router.get('/:id', withAuth, async (req, res) => {
  //   try {
  //     const postId = await Post.findByPk(req.params.id, {
  //       include: [
  //         User, 
  //         {
  //           model: Post,
  //           include: [User],
  //         }
  //       ]
  //     })
  //   }
  // })

  //add an update PUT route

  router.put('/:id', withAuth, async (req, res) => {
    console.log("testing");
    try {
        const postData = await Post.update(
          req.body,
          {
          where: {
            id: req.params.id,
            user_id: req.session.user_id
          },
  });
  if (!postData) {
    res.status(404).json({ message: 'No post found with this id!' });
    return;
  }

  res.status(200).json(postData);
} catch (err) {
  console.log(err)
  res.status(500).json(err);
}
});

  router.delete('/:id', withAuth,  async (req, res) => {
    console.log(req.params.id);
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;