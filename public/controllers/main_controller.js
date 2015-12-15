(function() {
  "use strict";

    angular
      .module("playtimePicks")
      .controller("MainController", MainController);

    MainController.$inject = ["$log"];

    function MainController($log) {
      var vm = this;

      vm.activities = [
        {
          title: "Activity 1",
          at_home: true,
          be_active: true,
          under_two: true,
          summary: "The first activity",
          image_url: "",
          activity_date: new Date(2015, 11, 4),
          favorite: true,
          comments: ""
        },
        {
          title: "Activity 2",
          at_home: true,
          be_active: false,
          under_two: false,
          summary: "The second activity",
          image_url: "",
          activity_date: new Date(2015, 7, 7),
          favorite: false,
          comments: ""
        },
        {
          title: "Activity 3",
          at_home: false,
          be_active: false,
          under_two: false,
          summary: "The third activity",
          image_url: "",
          activity_date: new Date(2015, 8, 2),
          favorite: true,
          comments: ""
        }
      ];

    };


})();
