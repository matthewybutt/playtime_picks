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
        controller: "MainController",
        controllerAs: "vm"
      })
      .state("activities", {
        url: "/activities/",
        templateUrl: "/templates/activities.html",
        controller: "ActivitiesController",
        controllerAs: "vm"
      })
      .state("activity", {
        url: "/activities/{id}",
        templateUrl: "/templates/activity.html",
        controller: "ActivitiesController",
        controllerAs: "vm"
      })
      .state("register", {
        url: "/register",
        templateUrl: "/templates/register.html",
        controller: "UsersController",
        controllerAs: "vm"
      })
      .state("login", {
        url: "/login",
        templateUrl: "/templates/login.html",
        controller: "LoginController",
        controllerAs: "vm"
      })
      .state("about", {
        url: "/about",
        templateUrl:  "/templates/about.html"
      });

    $urlRouterProvider.otherwise("/");

  }

})();
