angular.module('demo-app').directive('nsfMenu', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/html/menu.html',
        controller: 'MenuController'
    };
});

