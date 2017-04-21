/**
 * Created by Seth on 4/20/2017.
 */
angular.module('myApp').controller('portfolioCtrl', function($scope, mainService){

    $scope.project = {
        name: 'VentureBound',
        situation: 'I needed an app that would allow me to add and save Google Maps locations, upload and locally save pictures and then present them again in an easy to navigate way.',
        action: 'I used Angular to create my app',
        result: 'VentureBound was the result',
        tech: 'HTML/CSS, JavaScript, AngularJS, jQuery, TweenMax, NodeJS, Massive, Express, Body-Parser, Local Authentication, PostgreSQL.',
        screenshot: './screenshot.png'
    }
});