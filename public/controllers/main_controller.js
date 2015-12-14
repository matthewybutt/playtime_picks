(function() {
  "use strict";

    angular
      .module("playtimePicks")
      .controller("MainController", MainController);

    MainController.$inject = ["$log"];

    function MainController($log) {
      var vm = this;

      vm.text = "Hi";
    }


})();
