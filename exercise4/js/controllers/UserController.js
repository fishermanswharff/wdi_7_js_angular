users.controller('UserController',['$scope',function($scope){
  'use strict';
  function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}}
  trace('hello world');

  $scope.users = [];

  $scope.createUser = function(user){
    $scope.users.push(user);
    $scope.user = {};
  };
}]);