const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = (req,res)=>{
	
	// Getting cookies from browser
	//console.log(req.cookies);
	
	// changing cookies in browser
	//res.cookie('id',2223);
	//res.cookie('name',"RAJA");
	
	// Post.find({},(err,posts)=>{
	// 	if(err){
	// 		console.log("Error in finding the posts");
	// 		return ;
	// 	}
		
	// 	return res.render('home',{
	// 		title: "Home Page",
	// 		posts : posts
	// 	})
	// })
	// Populate the user of each post 
	Post.find({})
	.populate('user')
	.populate({  // Also populate comments on each post along with the user who commented
		path:'comments',
		populate:{
			path:'user' // Nesting population comments and user
		}
	})
	.sort({ createdAt: -1 })	// sort the posts creation timestamp
	.exec((err,posts)=>{
		User.find({},function(err,users){
			if(err){
				console.log("Error in finding the posts");
				return ;
			}
			return res.render('home',{
				title: "Home Page",
				posts : posts,
				all_users:users
			});
		});
		
	})
	
}

module.exports.about = (req,res)=>{
	return res.end('<h2> About</h2>')
}