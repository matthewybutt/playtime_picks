var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var commentSchema = new mongoose.Schema({
  body: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  activity: {type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
