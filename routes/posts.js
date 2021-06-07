const express = require('express');
const router = express.Router();

// import the post controller
const postController = require('../controllers/posts_controller');

console.log("Posts. route loaded");

// Route to 'postController.post'
router.get('/post',postController.post);

module.exports = router;
