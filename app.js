
const express = require('express');
const ejs = require('ejs')
const app = express();
const port = 3000;
// require express layouts
const expressLayouts = require('express-ejs-layouts')

// use express layouts
app.use(expressLayouts);

// use express Router By default routes to '.routes/index.js'
app.use('/',require('./routes'));

// setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,(err)=>{
	if(err){
		console.log(`Error in running the Server: ${err} `);
	}
	console.log(`Server is running on port: ${port}`);
})