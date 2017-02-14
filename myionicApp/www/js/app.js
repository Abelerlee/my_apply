
var app = angular.module('myApp',['ionic']);
    
      app.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
          .state('home',{
            url: '/home',
            templateUrl: 'template/home.html',
            controller: 'homeCtrl'
          })
      })
