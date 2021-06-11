
const express = require('express');
// Require cookie-parser to use cookies
const cokieParser = require('cookie-parser');

const ejs = require('ejs')
const app = express();
const port = 3000;

// require express layouts
const expressLayouts = require('express-ejs-layouts');
// require mongoose connection from config
const db = require('./config/mongoose')

// require express session to use for session cookie
const session = require('express-session');

// require passport 
const passport = require('passport');

const LocalStrategy = require('./config/passport-local-strategy')



// To get data from post request
app.use(express.urlencoded({extended:true}));

// To use cookies
app.use(cokieParser());

// use static files
app.use(express.static('./assets'));

// use express layouts
app.use(expressLayouts);

// express styles and subpages from subpages into layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name: 'socialspace',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

// Allow app to use passport and passport.session
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// after using initializing passport and session, use express Router By default routes to '.routes/index.js'
app.use('/',require('./routes'));

app.listen(port,(err)=>{
	if(err){
		console.log(`Error in running the Server: ${err} `);
	}
	console.log(`Server is running on port: ${port}`);
})