'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('marvelApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of heroes to the scope', function () {
        expect(scope.heroes.length).toBe(2);
    });

    it('should set the default value of the order', function () {
        expect(scope.reverse).toBe(false);
    });

});
