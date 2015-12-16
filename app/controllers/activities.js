// Require resource's model(s).
var Activity = require("../models/activity");

//Get All Activities
var index = function(req, res, next){
  Activity.find({}, function(err, activities){
    if (err) {
      res.send(err);
    }
    res.json(activities)
  });
};

//Get One Activity
var show = function(req, res, next){
  var id = req.params.id;
  Activity.findById(id, function(err, activity){
    if (err) {
      res.send(err);
    }
    res.json(activity);
  });
};

//Create an Activity
var create = function(req, res, next){
  var activity = new Activity();

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

module.exports = {
  index: index,
  show:  show,
  create: create,
  update: update,
  destroy: destroy
};
