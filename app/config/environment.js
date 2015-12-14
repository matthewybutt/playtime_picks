var _ = require('lodash');

var localEnvVars = {
  TITLE:      'playtime_picks',
  SAFE_TITLE: 'playtime_picks'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
