app.controller('myController', function($scope, $http, $interval, $location) {
    $scope.listDataUser = function (e){
        $http.get(apiUrl+'/listDataUser').then(
            function(response){ 
            	console.log(response.data.result)
            },
            function(response){
                console.log(angular.toJson(response));
            }
        );
    }
    $scope.listDataUser()
});

