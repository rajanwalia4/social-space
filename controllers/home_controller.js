module.exports.home = (req,res)=>{
	return res.end('<h1> Express in running</h1>')
}

module.exports.about = (req,res)=>{
	return res.end('<h2> About</h2>')
}