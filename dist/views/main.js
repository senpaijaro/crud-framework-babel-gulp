;(function() {
"use strict";

'use strict';

angular.module('app', ['templates', 'app.routes']);
}());

;(function() {
"use strict";

'use strict';

angular.module('templates', []).run(['$templateCache', function ($templateCache) {
  $templateCache.put('dashboard/dashboard.htm', '<h1>Dashboard</h1>\r\n<button ng-click = "click()" value = "tewqdsada"></button>');
  $templateCache.put('login/login.htm', '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<title></title>\r\n</head>\r\n<body>\r\n\t<h1>hello</h1>\r\n</body>\r\n</html>');
}]);
}());

;(function() {
"use strict";

'use strict';

angular.module('app.routes', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'login/login.htm',
		controller: 'Guest.LoginController'
	}).when('/dashboard', {
		templateUrl: 'dashboard/dashboard.htm',
		controller: 'Admin.DashboardController'
	});
	$locationProvider.hashPrefix('!');
	$routeProvider.otherwise({ redirectTo: '/' });
}]);
}());

;(function() {
"use strict";

'use strict';

angular.module('app').controller('Admin.DashboardController', ['$scope', Controller]);

function Controller($scope) {
		$scope.click = function () {
				alert('HELLO DASHBOARD');
		};
}
}());

;(function() {
"use strict";

'use strict';

angular.module('app').controller('Guest.LoginController', ['$scope', Controller]);

function Controller($scope) {
		$scope.click = function () {
				alert();
		};
}
}());
