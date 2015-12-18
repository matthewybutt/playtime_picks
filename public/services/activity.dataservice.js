(function(){
  "use strict";

  angular
    .module("playtimePicks")
    .factory("activityDataService", activityDataService);

  activityDataService.$inject = ["$http"];

  function activityDataService($http){

    var activities = {};

    activities.all = [];

    var activity = {};

    //Get all activities
    activities.getActivities = function() {
      return $http.get('/api/activities/').then(function(response) {
        activities.all = response.data;
      }, function(errRes) {
        console.error('Error getting activities!', errRes);
      });
    };

    //Create an activity
    activities.createActivity = function(activityData) {
        return $http.post('/api/activities/new', activityData)
    };

    //Get a single activity
    activities.getActivity = function(id) {
        return $http.get('/api/activities/' +id);
    };

    //Update an activity
    activities.updateActivity = function(id, activityData) {
        return $http.put('/api/activities/' + id, activityData);
    };

    //Delete an activity
    activities.deleteActivity = function(id) {
        return $http.delete('/api/activities/' +id);
    };

    return activities;
  };
})();
