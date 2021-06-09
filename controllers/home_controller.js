module.exports.home = (req,res)=>{
	
	// Getting cookies from browser
	//console.log(req.cookies);
	
	// changing cookies in browser
	//res.cookie('id',2223);
	//res.cookie('name',"RAJA");
	return res.render('home',{
		title: "Home Page"
	})
}

module.exports.about = (req,res)=>{
	return res.end('<h2> About</h2>')
}