var express = require('express');
var router = express.Router();
const Blog = require("../models/blogModel");

router.get("/", function(req, res) {
	Blog.find({}, (err,posts) => {
		if(err) {
			console.log("Error");
			console.log(err);
		} else {
			res.render("home", {posts:posts});
		}
	});
});

// router.get("/about", function(req, res) {
// 	res.render("about");
// });

// router.get("/contact", function(req, res) {
// 	res.render("contact");
// });

module.exports = router;