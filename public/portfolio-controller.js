/**
 * Created by Seth on 4/20/2017.
 */
angular.module('myApp').controller('portfolioCtrl', function($scope, mainService){

   $scope.projects = mainService.projects;
   var count = 0;
   $scope.project = $scope.projects[0];

   $scope.pageTurnRight = function(){
      if(count < $scope.projects.length - 1){
         count++;
          $scope.project = $scope.projects[count];
          var theElement = document.getElementById('project-' + $scope.projects[count].id);
          theElement.css('color', 'white');
      }
   };
   $scope.pageTurnLeft = function(){
      if(count > 0){
         count--;
         $scope.project = $scope.projects[count];
          var theElement = document.getElementById('project-' + $scope.projects[count].id);
          theElement.css('color', 'white');
      }
   }

});