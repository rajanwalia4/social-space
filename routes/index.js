const express = require('express');
// 
const router  = express.Router();

// import home controller
const homeController = require('../controllers/home_controller')

console.log("Routes Loaded");


// Making get request on '/' and returning the repone 'homeController.home'
router.get('/',homeController.home)
router.get('/about',homeController.about)



module.exports = router;
