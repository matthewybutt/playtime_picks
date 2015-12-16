var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var activitySchema = new mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  at_home: Boolean,
  be_active: Boolean,
  under_two: Boolean,
  summary: String,
  image_url: String,
  activity_date: Date,
  favorite: Boolean,
  fav_counter: {type: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
