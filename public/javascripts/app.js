var myapp = angular.module('student', []);
var host = '/api/';

myapp.controller('studentController', function($http, $scope) {

    $scope.students = [];

    $http.get(host + 'student').success(function(response) {
        $scope.students = response
    })

    $scope.getStudentDetail = function(sid) {
        $http.get(host + 'student/' + sid).success(function(response) {
            $scope.clickedStudent = response
        })
    }

    $scope.showEditForm = function() {
        $scope.newStudent = $scope.clickedStudent
        $scope.clickedStudent = undefined
    }

    $scope.createNewStudent = function() {
        $http.post(host + 'student', $scope.newStudent).success(function(response) {


            if (response.isNew) {
                $scope.students.push(response.data)
            }

            $scope.clickedStudent = response.data
            $scope.newStudent = undefined
        })
    }

    $scope.clearClickedStudent = function () {
        $scope.clickedStudent = undefined
        $scope.newStudent = undefined
    }

    $scope.deleteStudent = function(sid) {
        $http.delete(host + 'student/' + sid).success(function(response) {
            for (var i = 0; i < $scope.students.length; i++) {
                if ($scope.students[i]._id === response._id) {
                    $scope.students.splice(i, 1);
                    $scope.clickedStudent = undefined
                }
            }
        })
    }

})