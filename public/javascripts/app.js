var myapp = angular.module('student', []);
var host = 'http://localhost:3000/api/';

myapp.controller('studentController', function($http, $scope) {

    $scope.students = [];

    $http.get(host + 'student').success(function(response) {
        $scope.students = response
    })

})