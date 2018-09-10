// Require all the stuff
var Sequelize = require('sequelize'),
    passportLocalSequelize = require('passport-local-sequelize');
 
// Setup sequelize db connection
var mydb = new Sequelize('mydb', 'myuser', 'mypass', {
    dialect: 'sqlite',
 
    //storage: 'myUsersDB.sqlite'
    storage: 'mydb.sqlite3'
});

 
var Blog = mydb.define('Blog', {
    title: Sequelize.STRING,
    subTitle: Sequelize.STRING,
    comImage: Sequelize.STRING,
    blog: Sequelize.STRING,
    date: Sequelize.DATE,
});

mydb.addConstraint('Blog', ['date'], {
	type: 'default',
	defaultValue: Date.now(),
});
 
module.exports = Blog;