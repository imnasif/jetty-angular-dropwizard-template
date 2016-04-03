angular.module('demo-app').factory('BookService', ['$http', function ($http) {

    var bookList = [];
    $http.get('api/books')
        .success(function (books) {
            books.forEach(function(book){
                bookList.push(book);
            });
        });


    return {
        getBookList: function(){
            return bookList; 
        }
    };

}]);






