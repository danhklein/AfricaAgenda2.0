(function() {

    'use strict';

    angular
        .module('africaApp')
        .directive('mainfooter', mainfooter);

    function mainfooter() {
        return {
            restrict: 'E',
            templateUrl: 'components/footer/footer.view.html',
            controller: 'mainfooterCtrl',
            controllerAs: 'vm',
            bindToController: true
        };
    }

})();
