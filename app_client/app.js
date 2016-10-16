(function() {
  angular.module('loc8rApp', ['ngRoute', 'ngSanitize']);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: '/common/views/genericText.view.html',
        controller: 'aboutCtrl',
        controllerAs: 'vm'
      })
      .when('/location/:locationid', {
        templateUrl: '/locationDetail/locationDetail.view.html',
        controller: 'locationDetailCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
  }

  angular
    .module('loc8rApp')
    .config(['$routeProvider', config]);
})();
