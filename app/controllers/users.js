// Require resource's model(s).
var User = require("../models/user");

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

module.exports = {
  index: index,
  show:  show,
  create: create,
  update: update,
  destroy: destroy
};
