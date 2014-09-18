/**
 * Created by joel on 18/07/14.
 */

'use strict';

/**
 * @ngdoc function
 * @name marvelApp.controller:CharacterCtrl
 * @description
 * # CharacterCtrl
 * Controller of the marvelApp
 */
angular.module('marvelApp')
    .controller('CharacterCtrl', ['$scope', '$routeParams', 'marvelApi', function ($scope, $routeParams, marvelApi) {

        marvelApi.character($routeParams.id, function (response) {
            $scope.hero = response.data.results[0];

            var marvelLink = $scope.hero.urls.filter(function (obj) {
                return obj.type === 'detail';
            });
            $scope.moreUrl = marvelLink[0].url;
        });

    }]);