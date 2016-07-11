(function() {

    'use strict';

    angular
        .module('africaApp')
        .directive('singlePost', singlePost);

    function singlePost() {
        return {
            restrict: 'E',
            templateUrl: 'components/singlePost/singlePost.view.html',
            controller: 'singlePostCtrl',
            controllerAs: 'vm',
            bindToController: true
        };
    }

})();