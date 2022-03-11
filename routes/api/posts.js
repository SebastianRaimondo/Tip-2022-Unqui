const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
const User = require('../../models/User');

//Create a post
router.post(
  '/',
  [auth, body('text', 'Text is riquired').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });


     const post = await newPost.save();
     res.json(post)

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//Get all posts
router.get('/', auth, async (req, res) => {
  try {
    //Use "sort({date : -1})" to get the most recent post
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//Get a post by id
router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server error');
  }
});

//Delete a post using id
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    //Checking if the user who wants to delete the post is the creator of that post
    if (post.user._id.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Post.findOneAndRemove({ _id: req.params.id });

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server error');
  }
});

//Add likes to post
router.put('/likes/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    function postAlreadyLiked() {
      return post.likes
        .map(like => like.user
        .toString())
        .includes(req.user.id);
    }

    // Check if the post has already been liked
    if (postAlreadyLiked()) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Unlike the post
router.put('/unlikes/:id', auth, async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      function postAlreadyLiked() {
        return post.likes
          .map(like => like.user
          .toString())
          .includes(req.user.id);
      }
  
      // Check if the post has already been liked
      if (!postAlreadyLiked()) {
        return res.status(400).json({ msg: 'Post has not yet been liked' });
      }
  
      //Get index to remove
      const indexToRemove = post.likes.map(l => l.user.toString()).indexOf(req.user.id)
      post.likes.splice(indexToRemove, 1);
  
      await post.save();
      res.json(post.likes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });


  //Create comment 
  router.post(
    "/comment/:id",
    [auth, body("text", "Text is riquired").not().isEmpty()],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try {
        const user = await User.findById(req.user.id).select("-password");
        const post = await Post.findById(req.params.id);

        const newComment = {
          text: req.body.text,
          name: user.name,
          avatar: user.avatar,
          user: req.user.id,
        };

        console.log(newComment);

        post.comments.unshift(newComment);

        post.save();
        res.json(post.comments);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  );


module.exports = router;
