(function() {
  "use strict";

  angular
    .module("playtimePicks")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "userDataService", "$log", "authService"];

  function LoginController($state, userDataService, $log, authService) {
      var vm = this;

      vm.loginUser = loginUser;
      vm.isLoggedIn = authService.isLoggedIn;
      vm.currentUser = userDataService.user;

      vm.loginData;

      function loginUser(){
        // $log.log("click");
        authService.login(vm.loginData.email, vm.loginData.password)
          .then(function(res){
            // $log.log(res.data);
            userDataService.user = res.data.user;
            $state.go('activities');
          });
      }
  }
})();
