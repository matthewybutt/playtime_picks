(function(){
  "use strict";

  angular
    .module("playtimePicks")
    .factory("activityDataService", activityDataService);

  activityDataService.$inject = [];

  function activityDataService(){

    var activities= [
        // {
        //   title: "Activity 1",
        //   at_home: true,
        //   be_active: true,
        //   under_two: true,
        //   summary: "The first activity",
        //   image_url: "",
        //   activity_date: new Date(2015, 11, 4),
        //   favorite: false,
        //   fav_counter: 3,
        //   comments: [
        //   {author: "Jo", body: "This activity can get messy"}
        //   ]
        // },
        // {
        //   title: "Activity 2",
        //   at_home: true,
        //   be_active: false,
        //   under_two: false,
        //   summary: "The second activity",
        //   image_url: "",
        //   activity_date: new Date(2015, 7, 7),
        //   favorite: false,
        //   fav_counter: 10,
        //   comments: [
        //   {author: "Matt", body: "My kid liked this activity!"},
        //   {author: "Viv", body: "This activity is pretty fun."}
        //   ]
        // },
        // {
        //   title: "Activity 3",
        //   at_home: false,
        //   be_active: false,
        //   under_two: false,
        //   summary: "The third activity",
        //   image_url: "",
        //   activity_date: new Date(2015, 8, 2),
        //   favorite: false,
        //   fav_counter: 5,
        //   comments: []
        // }
      ];

    return activities;
  };
})();
