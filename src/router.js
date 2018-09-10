//nodemon router.js  (will auto restart router on save)

const express = require("express");
const app = express();
const passport = require("passport");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const User = require("./models/userModels");
// const Blog = require("./models/blogModel");

//App Config
// mongoose.connect("mongodb://localhost/MyBlogApp", (err, db) => {
// 	if (err) {
// 		console.log(err);
// 		process.exit(1);
// 	} else {
// 		console.log("Connected to mongodb");
// 	}
// });
// app.set("view engine", "ejs"); //looks for ejs files in the views folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(require('connect-multiparty')());
app.use(cookieParser());

//Passport Config
app.use(require("express-session")({
	secret:"this is our secret sentence",
	resave:false,
	saveUninitialized:false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.strategy)
passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);

//Share current user info within all routes
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

//Routes requiring
// var siteRoutes = require('./routes/siteRoutes');
// var blogRoutes = require('./routes/blogRoutes');
var adminRoutes = require('./routes/adminRoutes');

//Routes Usage
// app.use(siteRoutes);
// app.use(blogRoutes);
app.use(adminRoutes);

app.get('/test', (req, res) => {
	res.send({message: "Hi"});
});

const port = process.env.PORT || 5000

var server = app.listen(port, (err) => {
	if (err) {
		console.log(err);
	}
	console.log("App started. Port Number: " + port);
});

//test@mail.com / test