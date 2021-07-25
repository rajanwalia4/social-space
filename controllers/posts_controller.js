const Post = require('../models/post');
const Comment = require('../models/comment');


module.exports.post = (req,res)=>{
	return res.end('<h1>Post</h1>')
}

// using async await
module.exports.create = async (req,res)=>{
	try{
		let post = await Post.create({
			content : req.body.content,
			user : req.user._id
		});
		req.flash('success',"Post created successfully");
		return res.redirect("back");
	}
	catch(err){
		req.flash('error',err);
		return res.redirect("back");
	}
	
}
	
module.exports.destroy = async (req,res)=>{
	let post = await Post.findById(req.params.id);
	try{
		if(post.user == req.user.id){ // user is the creator of the post
			post.remove();
			
			// Also delete its comments
			await Comment.deleteMany({post:req.params.id});
			req.flash('success',"Post and its associated comment are deleted!");
			return res.redirect("back");
		}else{
			res.flash('error',"You can't delete this post");
			return res.redirect("back");
		}
	}catch(err){
		req.flash('error',err);
		return res.redirect("back");
	}
	
	
}
	