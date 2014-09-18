'use strict';

angular.module('marvelApp')
    .factory('marvelApi', ['$resource', 'apiUrl', 'publicKey', function ($resource, apiUrl, publicKey) {

        return {
            characters: function (page, items, searchTerm, callback) {
                var api = $resource(apiUrl + '/v1/public/characters', {apikey: publicKey});

                var offset = (page - 1) * items;

                setTimeout(function () {
                    console.log('im slow');
                }, 5000);

                var response = api.get({limit: items, offset: offset, nameStartsWith: searchTerm}, function () {
                    callback(response);
                });
            },

            character: function (characterId, callback) {
                var api = $resource(apiUrl + '/v1/public/characters/' + characterId, {apikey: publicKey});

                var response = api.get(function () {
                    callback(response);
                });
            }
        };
    }]);
