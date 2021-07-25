const Comment = require('../models/comment');
const Post = require('../models/post');


// using async await
module.exports.create = async (req,res)=>{
	
	try{
		let post = await Post.findById(req.body.post);
		if(post){
			//comment of the post
			let comment  = await Comment.create({
				content:req.body.content,  // content of comment
				user: req.user._id, // user who created comment
				post: req.body.post // post id 
			})
			// push the comment in the post 
			post.comments.push(comment);
			post.save();
			req.flash("success","Comment added");
			return res.redirect('/');
		}
	}catch(err){
		req.flash("error",err);
		return res.redirect('/') ;
	}	
}

// using asyc await
module.exports.destroy = async (req,res)=>{
		
	try{
		// find the comment id in the Comment collection
		let comment  = await Comment.findById(req.params.id);
					
		// if authenticated user is the commented user
		if(comment.user == req.user.id){
			//  save the comment's postId into the following variable to delete this comment id from 
			// corresponding post comment array
			let postId = comment.post;
			comment.remove();
			
			// following is to delete the comment id from the post collection's comments Array 
			Post.findByIdAndUpdate(postId,{ $pull:{comments:req.params.id} }, (err,post)=>{
				req.flash("error","Comment deleted");
				return res.redirect("back");
			});
		}else{
			req.flash("error","You can't delete this comment");
			return res.redirect("back");
		}
	}catch(err){
		req.flash("error",err);
		return res.redirect("back");
	}

}
