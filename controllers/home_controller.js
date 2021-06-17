const Post = require('../models/post');

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
	Post.find({}).populate('user').exec((err,posts)=>{
		if(err){
			console.log("Error in finding the posts");
			return ;
		}
		return res.render('home',{
			title: "Home Page",
			posts : posts
		})
	})
	
}

module.exports.about = (req,res)=>{
	return res.end('<h2> About</h2>')
}