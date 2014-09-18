'use strict';

angular.module('marvelApp')
    .directive('heroBadge', function() {
        return {
            restrict: 'E',
            scope: {
                hero: '=hero'
            },
            templateUrl: 'views/directives/heroBadge.html'
        };
    });
