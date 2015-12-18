// Require resource's model(s).
var User = require("../models/user");
    jwt         = require('jsonwebtoken'),
    env         = require('../config/environment'),
    superSecret = env.superSecret;

//Get All Users
var index = function(req, res, next){
  User.find({}, function(err, users){
    if (err) {
      res.send(err);
    }
    res.json(users)
  });
};

//Get a User
var show = function(req, res, next){
  var id = req.params.id;
  User.findById(id, function(err, user){
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

//Create an User
var create = function(req, res, next){
  var user = new User();

  user.name = req.body.name,
  user.email = req.body.email,
  user.password = req.body.password;

  user.save(function(err, savedUser){
    if (err){
      res.send(err)
    }
    console.log("User saved")
    res.json(savedUser);
  });
};

//Update a User
var update = function(req, res, next){
  var id = req.params.id;
  User.findById(id, function(err, user){
    if (err) {
      res.send(err);
    }
    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = req.body.password;

    user.save(function(err, updatedUser){
      if (err){
        res.send(err);
      }
      console.log("User updated");
      res.json(updatedUser);
    });
  });
};

//Delete a User
var destroy = function(req, res) {
  var id = req.params.id;
  User.remove({"_id" : id}, function(err){
    if (err){
      res.send(err);
    }
    res.json({message: 'User deleted'});
  });
};

///////////////////////////////////////////////////////////////

//Login a User
var userAuth = function(req, res, next){
  User.findOne({
      email: req.body.email
    }).select('email password name _id').exec(function(err, user) {

      if (err) throw err;

      // no user with that email was found
      if (!user) {
        res.json({
          success: false,
          message: 'Authentication failed. User not found.'
        });
      } else if (user) {

        // check if password matches
        var validPassword = user.comparePassword(req.body.password);
        if (!validPassword) {
          res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
          });
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign({
            email: user.email,
            name: user.name,
            _id: user._id
          }, superSecret, {
            expiresInMinutes: 43200 // expires in 30 days
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token,
            user: user
          });
        }

      }

    });
  };

//Verify Token
var tokenVerify = function(req, res, next) {
  // do logging
  console.log('Somebody just accessed the API!');

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, superSecret, function(err, decoded) {

      if (err) {
        res.status(403).send({
          success: false,
          message: 'Failed to authenticate token.'
      });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;

        next(); // make sure we go to the next routes and don't stop here
      }
    });

  } else {

    // if there is no token
    // return an HTTP response of 403 (access forbidden) and an error message
    res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
};

module.exports = {
  index: index,
  show:  show,
  create: create,
  update: update,
  destroy: destroy,
  userAuth: userAuth,
  tokenVerify: tokenVerify
};
