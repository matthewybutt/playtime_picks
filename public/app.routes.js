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
        url: "/activities",
        templateUrl: "/templates/activities.html",
        controller: "MainController"
      })
      .state("about", {
        url: "/about",
        templateUrl:  "/templates/about.html"
      });

    $urlRouterProvider.otherwise("/");

  }

})();
