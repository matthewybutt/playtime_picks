(function(){
  "use strict";

  angular
    .module('playtimePicks')
    .controller('ActivitiesController', ActivitiesController);

    ActivitiesController.$inject = ["$log", "$scope", "$stateParams", "activityDataService"];

    function ActivitiesController($log, $scope, $stateParams, activityDataService){
      $scope.activity = activityDataService[$stateParams.id];
    }

})();
