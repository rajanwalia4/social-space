const express = require('express');
const router = express.Router();
const passport = require('passport');

// import the post controller
const commentsController = require('../controllers/comments_controller');

console.log("comments route loaded");

//route to add a comment on a post
router.post('/create',passport.checkAuthentication ,commentsController.create);

module.exports = router;
