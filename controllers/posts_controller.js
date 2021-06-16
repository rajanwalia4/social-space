const Post = require('../models/post');


module.exports.post = (req,res)=>{
	return res.end('<h1>Post</h1>')
}

module.exports.create = (req,res)=>{
	const content = req.body.content;
	const user = req.user._id;
	Post.create({
		content : req.body.content,
		user: req.user._id	
	},(err,post)=>{
		if(err){
			console.log("Error in creating post");
			return ;
		}
		console.log("post successfully created");
		return res.redirect('/');
	});
}
	
	