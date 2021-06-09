const express = require('express');
const router = express.Router();

// import the users controller
const usersController = require('../controllers/users_controller');

console.log("Users route loaded");

// Route to the 'usersController.profile'
router.get('/profile',usersController.profile);

// Route to the 'usersController.SignUp'
router.get('/sign-up',usersController.signUp);

// Route to the 'usersController.signIn'
router.get('/sign-in',usersController.signIn);

// Route to the 'usersController.create'
router.post('/create',usersController.create);

// Route to the 'usersController.profile'
router.get('/chat',usersController.chat);


module.exports = router;