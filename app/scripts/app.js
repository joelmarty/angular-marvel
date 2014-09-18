'use strict';

/**
 * @ngdoc overview
 * @name marvelApp
 * @description
 * # marvelApp
 *
 * Main module of the application.
 */
angular
    .module('marvelApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/hero/:id', {
                templateUrl: 'views/hero.html',
                controller: 'CharacterCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function($httpProvider) {
        var $http,
            interceptor = ['$q', '$injector', 'apiUrl', function ($q, $injector, apiUrl) {
                var notificationChannel;

                function success(response) {
                    // get $http via $injector because of circular dependency problem
                    $http = $http || $injector.get('$http');
                    var marvelQueries = $http.pendingRequests.filter(function(request) {
                        return request.url.indexOf(apiUrl) < 0;
                    });

                    if(marvelQueries.length < 1) {
                        notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
                        notificationChannel.requestEnded();
                    }
                    return response;
                }

                function error(response) {
                    // get $http via $injector because of circular dependency problem
                    $http = $http || $injector.get('$http');
                    var marvelQueries = $http.pendingRequests.filter(function(request) {
                        return request.url.indexOf(apiUrl) < 0;
                    });

                    if(marvelQueries.length < 1) {
                        notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
                        notificationChannel.requestEnded();
                    }
                    return $q.reject(response);
                }

                return function (promise) {
                    notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
                    notificationChannel.requestStarted();
                    return promise.then(success, error);
                };
            }];

        $httpProvider.responseInterceptors.push(interceptor);
    });
