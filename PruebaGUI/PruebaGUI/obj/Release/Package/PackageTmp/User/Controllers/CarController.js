angularUsuarioApp.controller('CarController', [
'$scope', '$http', "Car", "$routeParams", "$location", function ($scope, $http, Car, $routeParams, $location) {

    $scope.functions = {
        "getAll": null,
        "data": null
    };

    $scope.lists = {
        "Styles": [],
    };


    $scope.objetcs = {
        "cars": new Car()
    };
    $scope.display = {
       
    };
    $scope.functions.data = function ()
    {
        $scope.objetcs.cars.make = "honda";
        $scope.objetcs.cars.model = "civic";
        $scope.objetcs.cars.year = "2014";
        console.log($scope.objetcs.cars);
    };
    $scope.functions.getAllCArs = function () {
        $scope.objetcs.cars.list(function (data) {
            $scope.lists.Styles= data.styles;
        });
    };
}]);