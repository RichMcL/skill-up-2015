var skillup = angular.module('skill-up-ng-app', []);

skillup.controller("MainCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var main = this;
    main.text = "Hello World!";

    $http.get("/hello").then(function(res){
        main.xhrTest = res.data;
    });

}]);