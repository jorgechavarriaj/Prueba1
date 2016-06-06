var angularUsuarioApp = angular.module('angularUsuarioApp', ['ngRoute']);
// Configuración de las rutas
angularUsuarioApp.config(function ($routeProvider) {
    $routeProvider.
            when('/list', {
                templateUrl: 'User/Views/ListCars.html',
                controller: 'CarController'
            }).
        otherwise({
            redirectTo: '/list'
            });
});
