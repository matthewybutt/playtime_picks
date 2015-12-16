(function(){
  "use strict";

  angular
    .module("playtimePicks")
    .factory("activityDataService", activityDataService);

  activityDataService.$inject = ["$http"];

  function activityDataService($http){

    var activities = {};

    activities.all = [];


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

    // var activities= [
    //     {
    //       title: "Activity 1",
    //       at_home: true,
    //       be_active: true,
    //       under_two: true,
    //       summary: "The first activity",
    //       image_url: "",
    //       activity_date: new Date(2015, 11, 4),
    //       favorite: false,
    //       fav_counter: 3,
    //       comments: [
    //       {author: "Jo", body: "This activity can get messy"}
    //       ]
    //     },
    //     {
    //       title: "Activity 2",
    //       at_home: true,
    //       be_active: false,
    //       under_two: false,
    //       summary: "The second activity",
    //       image_url: "",
    //       activity_date: new Date(2015, 7, 7),
    //       favorite: false,
    //       fav_counter: 10,
    //       comments: [
    //       {author: "Matt", body: "My kid liked this activity!"},
    //       {author: "Viv", body: "This activity is pretty fun."}
    //       ]
    //     },
    //     {
    //       title: "Activity 3",
    //       at_home: false,
    //       be_active: false,
    //       under_two: false,
    //       summary: "The third activity",
    //       image_url: "",
    //       activity_date: new Date(2015, 8, 2),
    //       favorite: false,
    //       fav_counter: 5,
    //       comments: []
    //     }
    //   ];

    return activities;

  };
})();
