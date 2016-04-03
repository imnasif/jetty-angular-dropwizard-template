angular.module('demo-app').factory('MovieService', ['$http', function ($http) {

    var movieList = [];
    $http.get('api/movies')
        .success(function (movies) {
            movies.forEach(function(movie){
                movieList.push(movie);
            });
        });


    return {
        getMovieList: function(){
            return movieList; 
        }
    };

}]);






