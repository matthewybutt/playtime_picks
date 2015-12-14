var mongoose = require('./config/database');

var User = require('../models/user');
var Activity = require('../models/activity');

var users = [
  { // 0
    name:   "Matt",
    email: "matt@email.com",
    googleId: "googleId_01"
    // activities: "Activity 1"
  },

  { // 1
    name:   "Lauren",
    email: "lauren@email.com",
    googleId: "googleId_02"
    // activities: "Activity 2"
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
    }
  });
});

var activities = [
  { // 0
    title: "Make a card",
    at_home: true,
    be_active: false,
    under_two: false,
    summary: "Get some crayons and paper and make a card for someone!",
    // image_url: ,
    activity_date: 2015-12-07,
    favorite: true
    // comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
  },

  { // 1
    title: "Go to a park",
    at_home: false,
    be_active: true,
    under_two: false,
    summary: "Find a local park and go nuts!",
    // image_url: ,
    activity_date: 2015-12-08,
    favorite: true
    // comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
  }
];

Activity.remove({}, function(err) {
  if (err) console.log(err);
  Activity.create(activities, function(err, activities) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + activities.length  + " activities.");
      mongoose.disconnect();
    }
  });
});
