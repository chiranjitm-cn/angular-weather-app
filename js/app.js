'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      }).
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      }).
      when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'weatherCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
