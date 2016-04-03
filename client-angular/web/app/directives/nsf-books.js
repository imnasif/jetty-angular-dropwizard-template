angular.module('demo-app').directive('nsfBooks', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/html/books.html',
        controller: 'BooksController'
    };
});

