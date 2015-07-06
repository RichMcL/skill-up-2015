skillup.controller("HomeCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var home = this;

    home.user = {};

    $http.get("/users/current").then(function(res){
        home.user = res.data;
    }, function(res){
        window.location.href = "#/login";
    });


}]);