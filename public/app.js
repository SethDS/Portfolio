angular.module('myApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'mainCtrl'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'portfolio.html',
                controller: 'portfolioCtrl'
            })
            .state('resume', {
                url: '/resume',
                templateUrl: 'resume.html',
                controller: 'resumeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about.html',
                controller: 'contact'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'contact.html',
                controller: 'contactCtrl'
            });

});