// Require resource's model(s).
var Comment = require("../models/comment");

var index = function(req, res, next){

  Comment.find({}, function(error, comments){
    res.render('comments/index', {comments: comments});
  });
};

var show = function(req, res, next){
  Comment.findById(req.params.id, function(error, comment){
    if (error) res.json({message: 'Could not find comment because ' + error});
    res.render('comments/show', {comment: comment});
  });
};

module.exports = {
  index: index,
  show:  show
};
