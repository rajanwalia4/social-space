

module.exports.profile = (req,res) =>{
	return res.render('users_profile',{
		title: "Users Profile"
	})
}

module.exports.chat = (req,res) =>{
	return res.send('<h2>User Chat</h2>');
}