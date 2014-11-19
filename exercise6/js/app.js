'use strict';

var users = angular.module('Users',[]).run(function(titleFactory){
  titleFactory.fetch();
});