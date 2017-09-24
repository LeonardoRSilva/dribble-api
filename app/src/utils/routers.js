'use strict';

angular.module('myApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/home/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
