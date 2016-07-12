(function() {

  'use strict';

  angular
    .module('africaApp')
    .controller('LandingCtrl', LandingCtrl);

  LandingCtrl.$inject = [];

  function LandingCtrl() {
    var vm = this;
    vm.posts = ["meow", "meow", "meow", "meow"];
    // vm.posts = [
    //   {
    //     title: 'Man in Black',
    //     description: 'Fled across the desrt',
    //     image: 'http://www.trbimg.com/img-56722fc4/turbine/la-2446267-ca-1204-idris-elba-05-cmc-jpg-20151216/700/700x394'
    //   },
    //   {
    //     title: 'Man in Black',
    //     description: 'Fleeing across the desrt',
    //     image: 'http://www.trbimg.com/img-56722fc4/turbine/la-2446267-ca-1204-idris-elba-05-cmc-jpg-20151216/700/700x394'
    //   },
    //   {
    //     title: 'Man in Black',
    //     description: 'Fleeing across the desrt',
    //     image: 'http://www.trbimg.com/img-56722fc4/turbine/la-2446267-ca-1204-idris-elba-05-cmc-jpg-20151216/700/700x394'
    //   },
    //   {
    //     title: 'Man in Black',
    //     description: 'Fleeing across the desrt',
    //     image: 'http://www.trbimg.com/img-56722fc4/turbine/la-2446267-ca-1204-idris-elba-05-cmc-jpg-20151216/700/700x394'
    //   },
    //   {
    //     title: 'Man in Black',
    //     description: 'Fleeing across the desrt',
    //     image: 'http://www.trbimg.com/img-56722fc4/turbine/la-2446267-ca-1204-idris-elba-05-cmc-jpg-20151216/700/700x394'
    //   },
    //   {
    //     title: 'Man in Black',
    //     description: 'Fleeing across the desrt',
    //     image: 'http://www.trbimg.com/img-56722fc4/turbine/la-2446267-ca-1204-idris-elba-05-cmc-jpg-20151216/700/700x394'
    //   }
    // ];

    vm.arr = [1,2,3,4,5];

  }


})();
