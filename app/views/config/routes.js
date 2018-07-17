angular.module('app.routes', ['ngRoute'])
	.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider){
		$routeProvider
		.when('/',{
			templateUrl: 'login/login.htm',
			controller: 'Guest.LoginController'
		})
		.when('/dashboard', {
			templateUrl: 'dashboard/dashboard.htm',
			controller: 'Admin.DashboardController'
		})
		$locationProvider.hashPrefix('!')
		$routeProvider.otherwise({redirectTo: '/'})
	}])