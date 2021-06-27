const Post = require('../models/post');
const Comment = require('../models/comment');


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
	
// To delete a Post and its corresponding comments
module.exports.destroy = (req,res)=>{
	Post.findById(req.params.id,(err,post)=>{
		// .id means converting the Object id into String
		if(post.user == req.user.id){ // user is the creator of the post
			post.remove();
			
			// Also delete its comments
			Comment.deleteMany({post:req.params.id},(err)=>{
				return res.redirect("back");
			});
		}else{
			// user is not the creator of the post
			return res.redirect("back");
		}
	});
	
}
	