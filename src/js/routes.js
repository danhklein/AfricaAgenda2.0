(function() {

  'use strict';

  angular
    .module('africaApp')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<landing></landing>'
      })
      .when('/singlePost', {
          template: '<single-post></single-post>'
      })
      .when('/about',{
        template: '<about></about>'
      })
      .when('/donate', {
        template: '<donate></donate>'
      })
      .otherwise({redirectTo: '/'});
  }

})();
