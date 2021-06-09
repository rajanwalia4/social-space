
//Render User Profile page
module.exports.profile = (req,res) =>{
	return res.render('user_profile',{
		title: "Users Profile"
	})
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

// get the sign up data
module.exports.create = (req,res)=>{
	// To Do
}


//  Sign In and create a Session For the User
module.exports.createSession = (req,res)=>{
	// To Do
}


module.exports.chat = (req,res) =>{
	return res.send('<h2>User Chat</h2>');
}