users.controller('UserCtrl',['$scope','$http','titleFactory',function($scope,$http,titleFactory){
  
  function trace(){for(var i = 0; i < arguments.length; i++){console.log(arguments[i]);}};

  $http.get('http://localhost:3000/users').success(function(response){
    $scope.users = response;
    $scope.titles = titleFactory.titles;
    trace($scope.titles);
  });

  $scope.deleteUser = function(user){
    // trace(user);
  };

  $scope.createUser = function(user){
    params = { user: user }
    $http.post('http://localhost:3000/users',params).success(function(response){
      $scope.users.push(response);
      $scope.user = {};
    });
    
    trace(params);
  }

}]);