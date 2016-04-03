angular.module('demo-app').directive('nsfHome', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/html/home.html',
        controller: 'HomeController'
    };
});

