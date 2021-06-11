// require the user model to use it
const User = require('../models/user')


//Render User Profile page
module.exports.profile = (req,res) =>{
	return res.render('user_profile',{
		title: "Users Profile"
	})
}

//Render User sign up Page
module.exports.signUp = (req,res)=>{
	if(req.isAuthenticated()){
		console.log("User authenticated at signup");
		return res.redirect('/users/profile');
	}
	
	console.log("User not authenticated at signup");
	
	return res.render('user_sign_up',{
		title:"Socialspace | Sign Up"
	});
}

//Render User sign In Page
module.exports.signIn = (req,res)=>{
	if(req.isAuthenticated()){
		console.log("User authenticated at signin");
		return res.redirect('/users/profile');
	}
	
	console.log("User not authenticated at signin");
	
	return res.render('user_sign_in',{
		title:"Socialspace | Sign In"
	});
}

// get the sign up data
module.exports.create = (req,res)=>{

	// password not match
	if(req.body.password!=req.body.confirm_password){
		return res.redirect("back");
	}
	
	User.findOne({email : req.body.email},(err,user)=>{
		if(err){
			console.log("Error in finding the User in Signing up!");
			return res.redirect("back");
		}
		// Create new user as it is not present
		if(!user){
			User.create(req.body,(err,user)=>{
				if(err){
					console.log("Error in finding the User in Signing up!");
					return res.redirect("back");
				}
				
				// redirect to the sign in page
				return res.redirect("/users/sign-in")
			});
		}else{	// user is already present in db
			return res.redirect("back");
		}
	});
}


//  Sign In and create a Session For the User
module.exports.createSession = (req,res)=>{
	console.log("createSession");
    return res.redirect('/users/profile');
}

// To destroy the session of the user
module.exports.destroySession = (req,res)=>{
	req.logout();
	return res.redirect('/');
}

module.exports.chat = (req,res) =>{
	return res.send('<h2>User Chat</h2>');
}