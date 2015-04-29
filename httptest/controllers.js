var app = angular.module('weatherForcast', []);
app.controller('weatherController', [ '$scope', '$http', function($scope, $http){
    $scope.text = 'asdfasdf';

    $scope.products = [];

    $http.get('i.json').success(function(data){
    	$scope.products = data;
    	console.log($scope.products);
    }).error(function(){
    });

 }]);