// Require resource's model(s).
var Activity = require("../models/activity");

//Get All Activities
var index = function(req, res, next){
  Activity.find({}).populate('comments.author').exec(function(err, activities){
    if (err) {
      res.send(err);
    }
    res.json(activities)
  });
};

//Get One Activity
var show = function(req, res, next){
  console.log("Looking for " + req.params.id)
  var id = req.params.id;
  Activity.findById(id, function(err, activity){
    if (err) {
      res.send(err);
    }
    console.log("The activity is " + activity);
    res.json(activity);
  });
};

//Create an Activity
var create = function(req, res, next){
  console.log(req.body.author);
  console.log(req.body.title);
  var activity = new Activity();

  activity.author = req.body.author,
  activity.title = req.body.title,
  activity.at_home = req.body.at_home,
  activity.be_active = req.body.be_active,
  activity.under_two = req.body.under_two,
  activity.summary = req.body.summary,
  activity.image_url = req.body.image_url;

  activity.save(function(err, savedActivity){
    if (err){
      res.send(err)
    }
    console.log("Activity saved")
    res.json(savedActivity);
  });
};

//Update an Activity
var update = function(req, res, next){
  var id = req.params.id;
  Activity.findById(id, function(err, activity){
    if (err) {
      res.send(err);
    }
    if (req.body.title) activity.title = req.body.title;
    if (req.body.at_home) activity.at_home = req.body.at_home;
    if (req.body.be_active) activity.be_active = req.body.be_active;
    if (req.body.under_two) activity.under_two = req.body.under_two;
    if (req.body.summary) activity.summary = req.body.summary;
    if (req.body.image_url) activity.image_url = req.body.image_url;

    activity.save(function(err, updatedActivity){
      if (err){
        res.send(err);
      }
      console.log("Activity updated");
      res.json(updatedActivity);
    });
  });
};

//Delete an Activity
var destroy = function(req, res) {
  var id = req.params.id;
  Activity.remove({"_id" : id}, function(err){
    if (err){
      res.send(err);
    }
    res.json({message: 'Activity deleted'});
  });
};

var createComment = function(req, res) {
  Activity.findById(req.params.id, function(err, activity) {
    console.log(req.body.author);
    activity.comments.push({
      body: req.body.body,
      author: req.body.author
    });
    activity.save(function(err) {
      Activity.findById(req.params.id).populate('comments.author').exec(function(err, activity) {
        res.json(activity.comments.pop());
      })
    });
  });
}

var favCount = function(req, res) {
  Activity.findById(id, function(err, activity){
    if (err) {
      res.send(err);
    }
    if (req.body.favorite) activity.favorite = req.body.favorite;
    if (req.body.fav_counter) activity.fav_counter = req.body.fav_counter;

    activity.save(function(err, updatedActivity){
      if (err){
        res.send(err);
      }
      console.log("Activity updated");
      res.json(updatedActivity);
    });
  });
};

module.exports = {
  index: index,
  show:  show,
  create: create,
  update: update,
  destroy: destroy,
  createComment: createComment,
  favCount: favCount
};
