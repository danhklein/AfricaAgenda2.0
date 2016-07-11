(function() {

  'use strict';

  angular
    .module('africaApp')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<mainnav></mainnav>'
      })
        .when('/singlePost', {
          template: '<single-post></single-post>'
        })
      .otherwise({redirectTo: '/'});
  }

})();
