// require the user model to use it
const User = require('../models/user')


//Render User Profile page
module.exports.profile = (req,res) =>{
	User.findById(req.params.id,function(err,user){
		return res.render('user_profile',{
			title: "SocialSpace | Users Profile",
			profile_user:user
		});
	})
}

// Update Profile
module.exports.update = (req,res) =>{
	if(req.user.id == req.params.id){
		User.findByIdAndUpdate(req.params.id, req.body, function(err,user){
			return res.redirect("back");
		});
	}else{
		return res.status(401).send("Unauthorized");
	}
}

//Render User sign up Page
module.exports.signUp = (req,res)=>{
	if(req.isAuthenticated()){
		console.log("User authenticated at signup");
		return res.redirect(`/users/profile/${req.user.id}`);
	}
	
	console.log("User not authenticated at signup");
	
	return res.render('user_sign_up',{
		title:"SocialSpace | Sign Up"
	});
}

//Render User sign In Page
module.exports.signIn = (req,res)=>{
	if(req.isAuthenticated()){
		console.log("User authenticated at signin");
		return res.redirect(`/users/profile/${req.user.id}`);
	}
	
	console.log("User not authenticated at signin");
	
	return res.render('user_sign_in',{
		title:"SocialSpace | Sign In"
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
	//With the flash middleware in place, all requests will have a req.flash() function that can be used for flash messages.
	console.log("createSession");
	req.flash('success',"Logged In successfully");
    return res.redirect('/');
}

// To destroy the session of the user
module.exports.destroySession = (req,res)=>{
	req.flash('success',"You have Logged out");
	req.logout();
	return res.redirect('/');
}

module.exports.chat = (req,res) =>{
	return res.send('<h2>User Chat</h2>');
}