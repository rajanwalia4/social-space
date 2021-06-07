

module.exports.profile = (req,res) =>{
	return res.send('<h1> Users profiles</h1>');
}

module.exports.chat = (req,res) =>{
	return res.send('<h2>User Chat</h2>');
}