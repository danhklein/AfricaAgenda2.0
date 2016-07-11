(function() {

  'use strict';

  angular
    .module('africaApp')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<header></header>'
      })
      .otherwise({redirectTo: '/'});
  }

})();
