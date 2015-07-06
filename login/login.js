skillup.controller("LoginCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var login = this;

    login.user = {};

    login.submit = function(){
        console.log("login!");
    }
}]);