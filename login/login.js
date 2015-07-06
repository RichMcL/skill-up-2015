skillup.controller("LoginCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var login = this;

    login.user = {};

    login.submit = function(){
        console.log("login!");

        $http.post("/login", login.user).then(function(res){
            window.location.href = "#/home";
        }, function(){
            alert("login failed");
        });
    }
}]);