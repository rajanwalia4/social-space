const express = require('express');
const router = express.Router();

// import the users controller
const usersController = require('../controllers/users_controller');

console.log("Users route loaded");

// Route to the 'usersController.profile'
router.get('/profile',usersController.profile);

// Route to the 'usersController.profile'
router.get('/chat',usersController.chat);


module.exports = router;