
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

const LocalStrategy = require('./config/passport-local-strategy');
//const { Session } = require('express-session');

// Used to store session data in db
const MongoStore = require('connect-mongo');

// to use sass in the app to preprocess the css
const sassMiddleware = require('node-sass-middleware');

// use sass Middleware to use scss
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug:true,
    outputStyle: 'extended',
    prefix: '/css'
}));



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

// Mongo store is used to store the session cookie in db
app.use(session({
    name: 'socialspace',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/socialspace_developement',
        autoRemove: 'disabled'
      },(err)=>{
          console.log(err || "connect-mongodb setup ok");
      })
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