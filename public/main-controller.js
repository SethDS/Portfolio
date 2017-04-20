/**
 * Created by Seth on 4/19/2017.
 */
angular.module('myApp').controller('mainCtrl', function($scope, $window){

        function fluidInit(){
            $window.FluidEffect.init();
            $window.FluidEffect.start();
        }
        fluidInit();


        console.log('yo')

});