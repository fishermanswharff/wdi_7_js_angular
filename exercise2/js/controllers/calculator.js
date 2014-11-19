app.controller('CalcCtrl',['$scope',function($scope){
  function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}}
  
  var calc = function(newValue, oldValue){
    if(!isNaN($scope.num1) && !isNaN($scope.num2)){
      $scope.sum = $scope.num1 + $scope.num2;
    }
  };

  $scope.$watchGroup(['num1','num2'],calc);
}]);
