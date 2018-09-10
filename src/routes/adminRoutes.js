var QueryFuncs = require ('../helper-functions/queryFuncs');
// import { isBuffer } from 'util';
var express = require('express');
var router = express.Router();
const passport = require("passport");

// const Router = require('express-promise-router');
// var router = new Router();

router.post("/signup", function(req, res, next) {
	console.log(req.body);
	// console.log(client);
	QueryFuncs.query('INSERT INTO users(username, email, password) VALUES ($1,$2,$3) RETURNING id', [req.body.username, req.body.email, req.body.password], (err1, res1) => {
		if (err1) return next(err1);
		console.log(res1);
		res.status(201).json(res1);
	});
});

// router.get("/signin", function(req, res) {
// 	res.render("signin");
// });

router.post("/signin",  function(req, res, next){
	console.log(req.body);
	QueryFuncs.query('SELECT * FROM users WHERE email = $1 AND password = $2', [req.body.email, req.body.password], (err1, res1) => {
		if (err1) {
			console.log("Signin Failed");
			console.log(err1);
			res.redirect("/signin");
			return next(err1);
		}
		console.log("Signed in");
		res.status(200).json(res1);
		//res.redirect("/");
	});
});

router.get("/signout", function(req, res) {
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/signin");
}

module.exports = router;