(function() {
  "use strict";

  angular
    .module('playtimePicks', ['ui.router'])
    .config(function($httpProvider) {

      // attach our auth interceptor to the http requests
      $httpProvider.interceptors.push('authInterceptor');
    });

})();
