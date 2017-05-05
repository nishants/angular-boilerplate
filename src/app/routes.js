app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise("/vocab");
  $stateProvider
      .state("home", {
        url:   "/home",
        templateUrl:   "assets/templates/home-template.html"
      });

  $locationProvider.html5Mode({
    //enabled: true,
    //requireBase: false
  });
}]);
