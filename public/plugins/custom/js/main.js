 app.config(function ($routeProvider){
   $routeProvider
   .when("/", {
     templateUrl: "/view/dashboard/index.htm",
     controller: "myController"
   })
   .when("/user",{
   	 templateUrl: "/view/accounts/index.htm"
   })
 }) 
