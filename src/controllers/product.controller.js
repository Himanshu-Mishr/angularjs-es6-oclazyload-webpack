import angular from 'angular';

export default angular
  .module('app.controllers')
  .controller('ProductController', ['$scope', function ($scope) {
    $scope.message = 'Product Page';
  }]);