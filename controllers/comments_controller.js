const Comment = require('../models/comment');
const Post = require('../models/post');


module.exports.create = (req,res)=>{
	
	Post.findById(req.body.post,(err,post)=>{
		//console.log(post);
		if(post){
			
			//comment of the post
			Comment.create({
				content:req.body.content,  // content of comment
				user: req.user._id, // user who created comment
				post: req.body.post // post id 
			},(err,comment)=>{
				// push the comment in the post 
				post.comments.push(comment);
				post.save();
				
				res.redirect('/');
			})
		}
		
	})
	
}
