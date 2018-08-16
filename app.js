const app = angular.module('app', []);
app.controller('HelloController', HelloController);

function HelloController($scope) {
    $scope.userName = "AngularJs1";
    $scope.showHelloWords = false;
    $scope.sayHello = function () {
        this.showHelloWords = true
    }
}

HelloController.$inject = ['$scope'];