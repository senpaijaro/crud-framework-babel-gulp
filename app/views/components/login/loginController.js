angular
		.module('app')
		.controller('Guest.LoginController', ['$scope', Controller]);
	
	function Controller($scope) { 
       $scope.click = function() {
		   alert();
	   }
    }