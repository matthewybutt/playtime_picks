(function(){
  "use strict";

  angular
    .module('playtimePicks')
    .controller('ActivitiesController', ActivitiesController);

    ActivitiesController.$inject = ["$log", "$scope", "$stateParams", "activityDataService"];

    function ActivitiesController($log, $scope, $stateParams, activityDataService){
      $scope.activity = activityDataService[$stateParams.id];

      $scope.addComment = function(){
        $log.log("click");
        if($scope.body === "") {return;}
        $log.log($scope.activity);
        $scope.activity.comments.push(
          {
            author: "user",
            body: $scope.body
          }
        );
        $scope.body = "";
        };

    }

})();
