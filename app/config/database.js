var mongoose = require('mongoose');

// var env = require('./environment');

// Use different database URIs based on whether an env var exists.

var dbUri = process.env.MONGOLAB_URI;
// ||
//             'mongodb://localhost/' + env.localEnvVars.SAFE_TITLE;

// if (!env.MONGOLAB_URI) {
//   // check that MongoD is running...
//   require('net').connect(27017, 'localhost').on('error', function() {
//     console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
//     process.exit(0);
//   });
// }

mongoose.connect(dbUri, function(){
  console.log("Connected to db: " + dbUri);
});

module.exports = mongoose;
