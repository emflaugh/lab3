var app = angular.module('mascots');

app.config(function($routeProvider) {

  $routeProvider
  .when('/tigers', {
    controller: 'routeCtrl',
    templateUrl: 'tigers.html'
  })
  .when('/lions', {
    controller: 'routeCtrl',
    templateUrl: 'lions.html'
  })
  .when('/redwings', {
    controller: 'routeCtrl',
    templateUrl: 'redwings.html'
  })
  .when('/pistons', {
    controller: 'routeCtrl',
    templateUrl: 'pistons.html'
  })
  .when('/home', {
    controller: 'routeCtrl',
    templateUrl: 'home.html'
  })
  .otherwise({ redirectTo: '/home' })

//closure for app.config
});
