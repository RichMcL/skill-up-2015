var skillup = angular.module('skill-up-ng-app', ['ngRoute']);

skillup.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when("/login", {
            templateUrl: "/login/login.html"
        }).when("/home", {
            templateUrl: "/home/home.html"
        }).otherwise({
            redirectTo: "/login"
        });
    }
]);

skillup.controller("MainCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var main = this;

}]);