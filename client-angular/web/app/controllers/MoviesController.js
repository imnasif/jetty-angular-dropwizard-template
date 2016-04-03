angular.module('demo-app').controller('MoviesController', ['$scope', 'MovieService', function ($scope, movieService) {
        $scope.movies = movieService.getMovieList();
}]);
