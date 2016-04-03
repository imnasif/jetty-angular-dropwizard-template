(function () {
    angular.module('demo-app', ['ngRoute']).
        config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(false);
            $routeProvider                
                .when('/', {
                    template: '<nsf-home></nsf-home>'
                }).when('/books', {
                    template: '<nsf-books></nsf-books>'
                })
                .when('/movies', {
                    template: '<nsf-movies></nsf-movies>'
                })
                .otherwise({
                    redirectTo: '/'
                });
            }]).run(['$route', function ($route) {
        $route.reload();
    }]);
})();