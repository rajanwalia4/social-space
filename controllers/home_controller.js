module.exports.home = (req,res)=>{
	return res.render('home',{
		title: "Home Page"
	})
}

module.exports.about = (req,res)=>{
	return res.end('<h2> About</h2>')
}