(function(){
  "use strict";

  angular
    .module("playtimePicks")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider){

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "/templates/home.html",
      })
      .state("activities", {
        url: "/activities/{id}",
        templateUrl: "/templates/activities.html",
        controller: "ActivitiesController"
      })
      .state("about", {
        url: "/about",
        templateUrl:  "/templates/about.html"
      });

    $urlRouterProvider.otherwise("/");

  }

})();
