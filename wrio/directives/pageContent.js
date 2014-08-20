'use strict'

angular.module('main').directive('pageContent', pageContent);

function pageContent() {
  return {
    restrict: 'A',
    scope: {
      dataType: '@',
      entity: '@'
    },
    templateUrl: 'wrio/layout/templates/content.html',
    controller: function($scope, $http, $compile) {
      $scope.url = 'wrio/layout/templates/' + $scope.dataType + '.html'; 
      $scope.$parent.$watch($scope.entity, function(val){
        if($scope.dataType == 'article'){
          $scope.content = val.article.articleBody;
        }
      });
    }
  }
}