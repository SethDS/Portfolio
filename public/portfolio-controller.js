/**
 * Created by Seth on 4/20/2017.
 */
angular.module('myApp').controller('portfolioCtrl', function($scope, mainService){

   $scope.projects = mainService.projects;
   var count = 0;
    var theElement = document.getElementById('project-' + $scope.projects[count].id);
    $(theElement).css({
        "transform": "rotate(90deg)"
    });
   $scope.project = $scope.projects[0];

   $scope.pageTurnRight = function(){

      if(count < $scope.projects.length - 1){
          $(theElement).css({
              "transform": "rotate(0deg)"
          });
         count++;
          $scope.project = $scope.projects[count];
          theElement = document.getElementById('project-' + $scope.projects[count].id);
         $(theElement).css({
            "transform": "rotate(90deg)"
         })
      }
   };
   $scope.pageTurnLeft = function(){

      if(count > 0){
          $(theElement).css({
              "transform": "rotate(0deg)"
          });
         count--;
         $scope.project = $scope.projects[count];
          theElement = document.getElementById('project-' + $scope.projects[count].id);
         console.log(theElement);
          $(theElement).css({
              "transform": "rotate(90deg)"
          })
      }
   }

});