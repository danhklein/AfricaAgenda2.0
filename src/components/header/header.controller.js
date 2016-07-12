(function() {

  'use strict';

  angular
    .module('africaApp')
    .controller('HeaderCtrl', HeaderCtrl);

  HeaderCtrl.$inject = [];

  function HeaderCtrl() {
    var vm = this;

    vm.hidden = true;

    vm.toggle = function() {
      vm.hidden = !vm.hidden;
      console.log(vm.hidden);
    }

  }

})();
