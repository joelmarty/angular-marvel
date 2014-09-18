'use strict';

/**
 * @ngdoc function
 * @name marvelApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the marvelApp
 */
angular.module('marvelApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
