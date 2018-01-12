import angular from 'angular';

export default angular
  .module('app.controllers')
  .controller('AboutController', ['$scope', function($scope) {
    $scope.message = 'About Page';
  }]);