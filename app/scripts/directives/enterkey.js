'use strict';

angular.module('marvelApp')
    .directive('enterKey', function () {
        return {
            restrict: 'A',
            scope: {
                enterKey: '&'
            },
            link: function (scope, element) {
                element.bind('keypress', function (event) {
                    if (event.which === 13) {
                        scope.enterKey();
                    }
                });
            }
        };
    });
