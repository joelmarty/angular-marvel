'use strict';

/**
 * @ngdoc function
 * @name marvelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelApp
 */
angular.module('marvelApp')
    .controller('MainCtrl', ['$scope', 'marvelApi', function ($scope, marvelApi) {

        $scope.reverse = false;
        $scope.currentPage = 1;
        $scope.itemCount = 12;
        $scope.query = null;

        var fixThumbnail = function (hero) {
            if (hero.thumbnail === null) {
                hero.thumbnail = {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                };
            }
        };

        var handleResponse = function (response) {
            var heroes = response.data.results;

            heroes.forEach(function (hero) {
                fixThumbnail(hero);
            });
            $scope.heroes = heroes;
            $scope.total = response.data.total;

        };

        $scope.pageChanged = function () {
            marvelApi.characters($scope.currentPage, $scope.itemCount, $scope.query, handleResponse);
        };

        $scope.findHero = function() {
            var search = $scope.query.trim();
            if(search.length === 0) {
                $scope.query = null;
            }
            marvelApi.characters($scope.currentPage, $scope.itemCount, $scope.query, handleResponse);
        };

        marvelApi.characters(1, $scope.itemCount, null, handleResponse);

    }]);

