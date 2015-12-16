(function(){
  "use strict";

  angular
    .module('playtimePicks')
    .controller('ActivitiesController', ActivitiesController);

    ActivitiesController.$inject = ["$log", "$scope", "$http", "activityDataService"];

    function ActivitiesController($log, $scope, $http, activityDataService){
      var vm = this;
      vm.activity = activityDataService;

      vm.getActivities = getActivities;

      vm.activities = vm.activity.all;

      vm.getActivities();

      $log.log(vm.activities);

      function getActivities (){
        vm.activity.getActivities();
        vm.activities = vm.activity.all;
      }

      // vm.addComment = addComment;

      // function addComment(){
      //   $log.log("click");
      //   if(vm.comments.body === "") {return;}
      //   $log.log(vm.activity);
      //   vm.activity.comments.push(
      //     {
      //       author: "user",
      //       body: vm.comments.body
      //     }
      //   );
      //   vm.comments.body = "";
      //   };

    }

})();
