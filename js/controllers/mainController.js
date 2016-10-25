(function(){
'use strict';
angular
.module('myApp',[])
.controller('MainController',MainController);

function MainController($scope){
 
	
	$scope.saved = {};
	$scope.saveUser = function (data){
		$scope.saved.name = $scope.player.name;
		$scope.saved.email = $scope.player.email;
		$scope.saved.url = $scope.player.url;
		$scope.saved.age = $scope.player.age;
		
	};
}
})();