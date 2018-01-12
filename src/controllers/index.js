import angular from 'angular';

export default angular
  .module('app.controllers', [])
  .controller('MainController', ['$scope', function ($scope) {
  $scope.message = 'Root page'
}])
