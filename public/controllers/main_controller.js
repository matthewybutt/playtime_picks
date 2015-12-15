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
          favorite: false,
          fav_counter: 3,
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
          fav_counter: 10,
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
          favorite: false,
          fav_counter: 5,
          comments: ""
        }
      ];

      vm.addActivity = addActivity;
      vm.addFavCount = addFavCount;

      function addActivity(){
        vm.activities.push(
          {
            title: vm.title,
            at_home: vm.at_home,
            be_active: vm.be_active,
            under_two: vm.under_two,
            summary: vm.summary,
            image_url: vm.image_url,
            activity_date: new Date(),
            favorite: false,
            fav_counter: 0,
            comments: ""
          }
        );
        vm.title = "";
        vm.at_home = "true";
        vm.be_active = "true";
        vm.under_two = "true";
        vm.summary = "";
        vm.image_url = "";
      };

      function addFavCount(activity){
        // $log.log("click");
        activity.favorite = !activity.favorite;
        if (activity.favorite === true){
          (activity.fav_counter +=1)
        } else {
          (activity.fav_counter -=1)
        };
      };

    };

})();
