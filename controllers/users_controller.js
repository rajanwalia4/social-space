// require the user model to use it
const User = require('../models/user')


//Render User Profile page
module.exports.profile = (req,res) =>{
	
	if(req.cookies.user_id){
		
		User.findById(req.cookies.user_id,(err,user)=>{
			
			// user present in db
			if(user){
				return res.render('user_profile',{
					title: "Users Profile",
					user:user
				})
			}
			// invalid cookie or user not present in db
			return res.redirect("/users/sign-in");
		});
	}else{
		// cookie not present
		return res.redirect("/users/sign-in");
	}
}

//Render User sign up Page
module.exports.signUp = (req,res)=>{
	return res.render('user_sign_up',{
		title:"Socialspace | Sign Up"
	});
}

//Render User sign In Page
module.exports.signIn = (req,res)=>{
	return res.render('user_sign_in',{
		title:"Socialspace | Sign In"
	});
}

// delete the session or cookies
module.exports.signOut = (req,res)=>{
	
	res.clearCookie('user_id');
	return res.redirect('/users/sign-up');
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
	// Find the User
	User.findOne({email:req.body.email},(err,user)=>{
		if(err){
			console.log("Error in finding the User in Signing in!");
			return res.redirect("back");
		}
		// Handle the User
		if(user){
			if(user.password !=req.body.password){
				console.log("password not matching");
				return res.redirect("/users/sign-in");
			}
			//Handle session creation i.e  store user.id in cookies
			res.cookie("user_id",user.id);
			
			return res.redirect("/users/profile");
		}else{
			// User not Found
			console.log("user not found");
			return res.redirect("back");
		}
	})
}


module.exports.chat = (req,res) =>{
	return res.send('<h2>User Chat</h2>');
}