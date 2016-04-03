angular.module('demo-app').directive('nsfMovies', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/html/movies.html',
        controller: 'MoviesController'
    };
});

