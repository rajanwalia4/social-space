const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({
	content:{
		type:String,
		required:true
	},
	user:{
		type : mongoose.Schema.Types.ObjectId, // this will refer to the object having the post
		ref:'User'	
	}
},{
	timestamps:true
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;