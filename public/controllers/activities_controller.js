(function(){
  "use strict";

  angular
    .module('playtimePicks')
    .controller('ActivitiesController', ActivitiesController);

    ActivitiesController.$inject = ["$state","$log", "$scope", "$http", "activityDataService", "userDataService", "authService"];

    function ActivitiesController($state, $log, $scope, $http, activityDataService, userDataService, authService){
      var vm = this;

      vm.currentUser = userDataService.user;

      vm.getActivities = getActivities;

      vm.activities = activityDataService.all;

      vm.isLoggedIn = authService.isLoggedIn;

      vm.getActivities();
      // authService.getUser();
      // vm.currentUser = authService.currentUser; //EZRA working on stuff
      vm.createActivity = createActivity;
      vm.getActivity = getActivity;
      vm.addFavCount = addFavCount;

      // $log.log(vm.currentUser);

      function getActivities (){
        activityDataService.getActivities();
        vm.activities = activityDataService.all;
      }

      function createActivity(){
        // $log.log(vm.activityData.author);
        activityDataService.createActivity(vm.activityData)
          .success(function(data) {
        // $log.log(vm.currentUser._id);
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
            $state.go('activities');
          });
        // $log.log(vm.activityData);
      };

      function getActivity(id){
        activityDataService.getActivity(id).then(function(response){
            vm.activity = response.data;
        // $log.log("activity is " +vm.activity.title);

          }, function(errRes) {
            console.error('Error getting activity!', errRes);
          });

        // $log.log("activity is " +vm.activity);
      }

      vm.addComment = function addComment(activity, comment){
        // $log.log("click add comment");
        if(comment.body) {
          // $log.log(vm.activity);
          // $log.log(vm.currentUser._id);
          $http.post('/api/activities/' + activity._id + '/comments',
            {
              body: comment.body,
              author: vm.currentUser._id
            }
          ).then(function(res) {
            activity.comments.push(res.data);
          });
          comment.body = "";
        }
      };

      function addFavCount(activity){
        // $log.log("click");
        activity.favorite = !activity.favorite;
        if (activity.favorite === true){
            (activity.fav_counter +=1)
          } else {
            (activity.fav_counter -=1)
          };
        // $http.put('/api/activities/' + activity._id + '/favCount',
        // {
        //   favorite: activity.favorite,
        //   fav_counter: activity.fav_counter
        // }
        // ).then(getActivities);

        };

        //////////////////////////
        //FOR FLOATING FILTERBAR//
        //////////////////////////
        // function sticky_relocate() {
        //     var window_top = $(window).scrollTop();
        //     var div_top = $('#sticky-anchor').offset().top;
        //     if (window_top > div_top) {
        //         $('#sticky').addClass('stick');
        //     } else {
        //         $('#sticky').removeClass('stick');
        //     }
        // }

        // $(function () {
        //     $(window).scroll(sticky_relocate);
        //     sticky_relocate();
        // });

    }

})();
