(function () {
'use strict';

angular.module('Assignment1', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.count = 0;
  $scope.lunch = ""

  $scope.sayLunchMessage = function (count) {

    if (count == 0) {
      return "Please enter data first.";
    } else if (count <= 3 && count > 0) {
      return "Enjoy!";
    } else{
      return "You are eating too much!";
    }
  };

  $scope.parseLunch = function () {

    if ($scope.lunch.length == 0) {
        $scope.count = 0;
    } else {
       var arrayOfStrings = $scope.lunch.split(',');
       $scope.count = arrayOfStrings.length;
    }
  };
}

})();
