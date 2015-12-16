(function(){
  "use strict";

  angular
    .module('playtimePicks')
    .controller('ActivitiesController', ActivitiesController);

    ActivitiesController.$inject = ["$log", "$scope", "$http", "activityDataService"];

    function ActivitiesController($log, $scope, $http, activityDataService){
      var vm = this;

      vm.getActivities = getActivities;

      vm.activities = activityDataService.all;

      vm.getActivities();


      function getActivities (){
        activityDataService.getActivities();
        vm.activities = activityDataService.all;
      }

      vm.createActivity = createActivity;
      vm.addFavCount = addFavCount;

      function createActivity(){
        activityDataService.createActivity(vm.activityData)
          .success(function(data) {
            vm.activities.push(
              {
                title: vm.activityData.title,
                at_home: vm.activityData.at_home,
                be_active: vm.activityData.be_active,
                under_two: vm.activityData.under_two,
                summary: vm.activityData.summary,
                image_url: vm.activityData.image_url,
                activity_date: new Date(),
                favorite: false,
                fav_counter: 0,
                comments: []
              }
            );
            vm.activityData = {};
          });
        $log.log(vm.activityData);
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

      vm.addComment = function addComment(activity, comment){
        $log.log("click add comment");
        if(comment.body) {
          $log.log(vm.activity);
          $http.post('/api/activities/' + activity._id + '/comments',
            {
              body: comment.body
            }
          ).then(function(res) {
            activity.comments.push(res.data);
          });
          comment.body = "";
        }
      };

    }

})();
