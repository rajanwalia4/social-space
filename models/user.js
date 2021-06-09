const mongoose = require('mongoose');

// Created User Schema
const userSchema = new mongoose.Schema({
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required :true
	}
},{
	timestamps:true
});

// Created a User Model
const User = mongoose.model('User',userSchema);

module.exports = User;
