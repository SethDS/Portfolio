angular.module('myApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'mainCtrl'
            });

});