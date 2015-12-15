// Require resource's model(s).
var Activity = require("../models/activity");

var index = function(req, res, next){

  Activity.find({}, function(error, activities){
    res.render('activities/index', {activities: activities});
  });
};

var show = function(req, res, next){
  Activity.findById(req.params.id, function(error, activity){
    if (error) res.json({message: 'Could not find activity because ' + error});
    res.render('activities/show', {activity: activity});
  });
};

var create = function(req, res, next){
  var activity = new Activity();

  activity.title = req.body.title;

  activity.save(function(err, savedActivity){
    if (err){
      res.send(err)
    }
    console.log("Activity saved")
    res.json(savedActivity);
  });
};

module.exports = {
  index: index,
  show:  show,
  create: create
};
