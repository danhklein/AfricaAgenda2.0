(function() {

  'use strict';

  angular
    .module('africaApp')
    .directive('header', header);

  function header() {
    return {
      restrict: 'E',
      templateUrl: 'components/header/header.view.html',
      controller: 'HeaderCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
