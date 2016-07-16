(function() {

    'use strict';

    angular
        .module('africaApp')
        .directive('donate', donate);

    function donate() {
        return {
            restrict: 'E',
            templateUrl: 'components/donate/donate.view.html',
            controller: 'DonateCtrl',
            controllerAs: 'vm',
            bindToController: true
        };
    }

})();