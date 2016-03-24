'use strict';

/* Controllers */

var myControllers = angular.module('myControllers', []);

myControllers.controller('aboutCtrl', ['$scope',
  function($scope) {

  }]);

myControllers.controller('contactCtrl', ['$scope',
  function($scope) {

  }]);
myControllers.controller('homeCtrl', function ( $scope, $http ){

});

// myControllers.controller('weatherCtrl', ['$scope', '$http',
//   function($scope, $http) {
//     $scope.getWeather = function() {
//       $http.get("http://api.openweathermap.org/data/2.5/weather?q="+($scope.place)+"&appid=0864b43f1a8ed861a7107a0cf6b28a54")
//     .success(function(response) {$scope.cityweather = response;});
//     $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+($scope.place)+"&cnt=10&mode=json&appid=0864b43f1a8ed861a7107a0cf6b28a54")
//     .success(function(response) {$scope.citydayweather = response;});
//     };

//     $scope.getClass = function (path) {
//       // return ($location.path().substr(0, path.length) === path) ? 'active' : '';
//       alert("hello");
//     }
//   }]);
//   
myControllers.controller('weatherCtrl', function ( $scope, $http ){

    $scope.getWeather = function() {

        $http.get("http://api.openweathermap.org/data/2.5/weather?q="+($scope.place)+"&appid=0864b43f1a8ed861a7107a0cf6b28a54")
        .success(function(response) {$scope.cityweather = response;});

        $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+($scope.place)+"&cnt=10&mode=json&appid=0864b43f1a8ed861a7107a0cf6b28a54")
        .success(function(response) {$scope.citydayweather = response;});
    };

});

myControllers.controller('weatherApp', function ( $scope, $http ){
    $scope.getClass = function (path) {
        var lastPart = window.location.href.split("/").pop();
        return ( lastPart === path) ? 'active' : '';
    }

});
