angularUsuarioApp.factory('Car', function ($http, $httpParamSerializer) {

    function Car() {
        this.make = null;
        this.model = null;
        this.year = null;

        Car.prototype.list = function (callback) {
            $http({ url: 'http://api.edmunds.com/api/vehicle/v2/'+this.make+'/'+this.model+'/'+this.year+'?fmt=json&api_key=7fs98uhsy9nw35sxrvm845x4', method: 'GET' }).
                 success(function (data, status) {
                     callback(data);
                 }).
                 error(function (data, status) {
                 });
        };
    }
    return (Car);
});