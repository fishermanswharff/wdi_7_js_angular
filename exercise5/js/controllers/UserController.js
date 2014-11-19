users.controller('UserCtrl',['$scope','$http',function($scope,$http){
  function trace(){for(var i = 0; i < arguments.length; i++){console.log(arguments[i]);}};
  trace('hello world','a whole new world');
  
  $http.get('http://localhost:3000/users').success(function(response){
    $scope.users = response;
  });
  
  $http.get('http://localhost:3000/titles').success(function(response){
    trace(response);
    $scope.titles = response;
  });

  

}]);