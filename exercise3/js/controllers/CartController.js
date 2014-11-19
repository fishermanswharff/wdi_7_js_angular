cart.controller('CartCtrl',['$scope',function($scope){
  function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}}
  trace('hello world')
  $scope.items = [{
    name: 'apple',
    price: '0.62',
    quantity: 1
  },{
    name: 'bananas',
    price: '1.29',
    quantity: 1
  },{
    name: 'milk',
    price: '4.99',
    quantity: 1
  },{
    name: 'foobars',
    price: '1.99',
    quantity: 1
  }];

  $scope.subTotal = 0;
  $scope.addToCart = function(item){
    $scope.subTotal += (item.quantity * item.price);
    trace($scope.subTotal);
    // $scope.totalPrice($scope.subTotal);
  };

  $scope.totalPrice = function(){

  };
}]);