var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  name:   String,
  email: String,
  activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
  fav_activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
