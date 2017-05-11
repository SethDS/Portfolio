/**
 * Created by Seth on 4/21/2017.
 */
angular.module('myApp').service('mainService', function () {

    this.projects = [
        {
            name: 'VentureBound',
            id: 'one',
            situation: 'I needed an app that would allow me to add and save Google Maps locations, upload and locally save pictures and then present them again in an easy to navigate way.',
            action: 'I used Angular to create my app',
            result: 'VentureBound was the result',
            tech: 'HTML/CSS, JavaScript, AngularJS, jQuery, TweenMax, NodeJS, Massive, Express, Body-Parser, Local Authentication, PostgreSQL.',
            screenshots: {
                one: './screenshot.png'
            }
        },
        {
            name: 'Top Secret Clone',
            id: 'two',
            situation: 'A couple other devs and I decided we wanted to try our hand at re-creating a jaw-dropping CSS masterpiece.',
            action: 'So we got together and brainstormed how we were going to tackle this creative conundrum.  I got assigned to do the home page and the case studies page.',
            result: 'After a couple weeks of constant amazement at what the devs at STS accomplished, we had a pretty dang good shameless copy of success.',
            tech: 'HTML/CSS....LOTS of CSS, JavaScript, AngularJS, jQuery, TweenMax, NodeJS, Express, Body-Parser, Local Authentication, Mongoose, MongoDB.',
            screenshots: {
                one: './stspics/sts1.png',
                two: './stspics/sts2.png',
                three: './stspics/sts3.png',
                four: './stspics/sts4.png',
                five: './stspics/sts5.png',
                six: './stspics/sts6.png',
                seven: './stspics/sts7.png',
                eight: './stspics/sts8.png'
            }
        },
        {
            name: 'Bound Books Clone',
            id: 'three',
            situation: 'I needed an app that would allow me to add and save Google Maps locations, upload and locally save pictures and then present them again in an easy to navigate way.',
            action: 'I used Angular to create my app',
            result: 'VentureBound was the result',
            tech: 'HTML/CSS, JavaScript, AngularJS, jQuery, TweenMax, NodeJS, Massive, Express, Body-Parser, Local Authentication, PostgreSQL.',
            screenshots: {
                one: './screenshot.png'
            }
        },
        {
            name: 'Vacheron Constantin Clone',
            id: 'four',
            situation: 'I needed an app that would allow me to add and save Google Maps locations, upload and locally save pictures and then present them again in an easy to navigate way.',
            action: 'I used Angular to create my app',
            result: 'VentureBound was the result',
            tech: 'HTML/CSS, JavaScript, AngularJS, jQuery, TweenMax, NodeJS, Massive, Express, Body-Parser, Local Authentication, PostgreSQL.',
            screenshots: {
                one: './screenshot.png'
            }
        },
        {
            name: 'Famiglia Cecchi Clone',
            id: 'five',
            situation: 'I needed an app that would allow me to add and save Google Maps locations, upload and locally save pictures and then present them again in an easy to navigate way.',
            action: 'I used Angular to create my app',
            result: 'VentureBound was the result',
            tech: 'HTML/CSS, JavaScript, AngularJS, jQuery, TweenMax, NodeJS, Massive, Express, Body-Parser, Local Authentication, PostgreSQL.',
            screenshots: {
                one: './screenshot.png'
            }
        },
        {
            name: 'Ivan Aivanovzky Clone',
            id: 'six',
            situation: 'I needed an app that would allow me to add and save Google Maps locations, upload and locally save pictures and then present them again in an easy to navigate way.',
            action: 'I used Angular to create my app',
            result: 'VentureBound was the result',
            tech: 'HTML/CSS, JavaScript, AngularJS, jQuery, TweenMax, NodeJS, Massive, Express, Body-Parser, Local Authentication, PostgreSQL.',
            screenshots: {
                one: './screenshot.png'
            }
        }
    ];
});