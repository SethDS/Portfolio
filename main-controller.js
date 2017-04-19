/**
 * Created by Seth on 4/19/2017.
 */
angular.module('myApp').controller('mainCtrl', function($scope, $window, $timeout){

        function fluidInit(){
            $window.FluidEffect.init();
            $window.FluidEffect.start();
        };
        fluidInit();


});