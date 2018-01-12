import angular from 'angular';

export default angular
  .module('app.controllers')
  .controller('CareerController', ['$scope', function ($scope) {
    $scope.message = 'Career Page';
  }]);