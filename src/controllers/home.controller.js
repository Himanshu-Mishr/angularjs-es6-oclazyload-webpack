import angular from 'angular';

export default angular
  .module('app.controllers')
  .controller('HomeController', ['$scope', function ($scope) {
    $scope.message = 'Home Page';
  }]);