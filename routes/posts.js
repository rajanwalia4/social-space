const express = require('express');
const router = express.Router();
const passport = require('passport');

// import the post controller
const postController = require('../controllers/posts_controller');

console.log("Posts. route loaded");

// Route to 'postController.post'
router.get('/post',postController.post);

router.post('/create',passport.checkAuthentication ,postController.create);

// Route to delete the post
router.get('/destroy/:id',passport.checkAuthentication,postController.destroy);
module.exports = router;
