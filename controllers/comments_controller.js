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
			
			res.redirect('/');
		}
	}catch(err){
		console.log("Error : ",err);
		return ;
	}	
}

// module.exports.create = (req,res)=>{
	
// 	Post.findById(req.body.post,(err,post)=>{
// 		//console.log(post);
// 		if(post){
			
// 			//comment of the post
// 			Comment.create({
// 				content:req.body.content,  // content of comment
// 				user: req.user._id, // user who created comment
// 				post: req.body.post // post id 
// 			},(err,comment)=>{
// 				// push the comment in the post 
// 				post.comments.push(comment);
// 				post.save();
				
// 				res.redirect('/');
// 			})
// 		}
		
// 	})

// }

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
				return res.redirect("back");
			});
		}else{
			return res.redirect("back");
		}
	}catch(err){
		console.log("Error : ",err);
		return ;
	}

}


// // To delete the comment from the Comment and its id from the Post collections
// module.exports.destroy = (req,res)=>{
	
	
// 	// find the comment id in the Comment collection
// 	Comment.findById(req.params.id,(err,comment)=>{
				
// 		// if authenticated user is the commented user
// 		if(comment.user == req.user.id){
// 			//  save the comment's postId into the following variable to delete this comment id from 
// 			// corresponding post comment array
// 			let postId = comment.post;
// 			comment.remove();
			
// 			// following is to delete the comment id from the post collection's comments Array 
// 			Post.findByIdAndUpdate(postId,{ $pull:{comments:req.params.id} }, (err,post)=>{
// 				return res.redirect("back");
// 			});
// 		}else{
// 			return res.redirect("back");
// 		}
		
// 	});
// }