
const express = require('express');
const app = express();
const port = 3000;

// use express Router By default routes to '.routes/index.js'
app.use('/',require('./routes'));



app.listen(port,(err)=>{
	if(err){
		console.log(`Error in running the Server: ${err} `);
	}
	console.log(`Server is running on port: ${port}`);
})