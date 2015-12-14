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

module.exports = {
  index: index,
  show:  show
};
