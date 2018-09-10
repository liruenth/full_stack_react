var crypto = require('crypto');
var sqlite3 = require('sqlite3');
const LocalStrategy = require("passport-local");

var db = new sqlite3.Database('../mydb.sqlite3');

// ...

function hashPassword(password, salt) {
  var hash = crypto.createHash('sha256');
  hash.update(password);
  hash.update(salt);
  return hash.digest('hex');
}

var User = {};

User.strategy = new LocalStrategy(function(email, password, done) {
  
  db.get('SELECT salt FROM users WHERE email = ?', email, function(err, row) {
    if (!row) return done(null, false);
    var hash = hashPassword(password, row.salt);
    db.get('SELECT email, id FROM users WHERE email = ? AND password = ?', email, hash, function(err, row) {
      if (!row) return done(null, false);
      return done(null, row);
    });
  });
});

User.serializeUser = function(user, done) {
  return done(null, user.id);
};

User.deserializeUser =function(id, done) {
  db.get('SELECT id, email FROM users WHERE id = ?', id, function(err, row) {
    if (!row) return done(null, false);
    return done(null, row);
  });
};

module.exports = User;