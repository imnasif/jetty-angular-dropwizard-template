angular.module('demo-app').controller('BooksController', ['$scope', 'BookService', function ($scope, bookService) {
        $scope.books = bookService.getBookList();
}]);
