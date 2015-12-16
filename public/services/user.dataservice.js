(function(){
  "use strict";

  angular
    .module("playtimePicks")
    .factory("userDataService", userDataService);

  userDataService.$inject = ["$http"];

  function userDataService($http){

    var users = {};


    //Get all users
    users.getUsers = function() {
      return $http.get('/api/users/').then(function(response) {
        users.all = response.data;
      }, function(errRes) {
        console.error('Error getting users!', errRes);
      });
    };

    //Create an user
    users.createUser = function(userData) {
        return $http.post('/api/users/new', userData)
    };

    //Get a single user
    users.getUser = function(id) {
        return $http.get('/api/users/' +id);
    };

    //Update an user
    users.updateUser = function(id, userData) {
        return $http.put('/api/users/' + id, userData);
    };

    //Delete an user
    users.deleteUser = function(id) {
        return $http.delete('/api/users/' +id);
    };

    return users;

  };
})();
