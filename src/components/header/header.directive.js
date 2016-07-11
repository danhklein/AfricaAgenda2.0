(function() {

  'use strict';

  angular
    .module('africaApp')
    .directive('mainnav', mainnav);

  function mainnav() {
    return {
      restrict: 'E',
      templateUrl: 'components/header/header.view.html',
      controller: 'HeaderCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
