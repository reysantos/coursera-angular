(function () {
'use strict';

angular.module('Assignment1', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {

  $scope.count = 0;
  $scope.lunch = ""

  $scope.sayLunchMessage = function (count) {
    console.log('rhs debug the arraycount is :' + count);

    if (count == 0) {
      return "Please enter data first.";
    } else if (count <= 3 && count > 0) {
      return "Enjoy!";
    } else{
      return "You are eating too much!";
    }
  };

  $scope.parseLunch = function () {
    // this is where you parse and count the var passed
    // console.log("Your lunch is..." + $scope.lunch);

    if ($scope.lunch.length == 0) {
        $scope.count = 0;
    } else {
       console.log("This is the lenght of the string entered:" + $scope.lunch.length);
       console.log("Your lunch is..." + $scope.lunch);
       var arrayOfStrings = $scope.lunch.split(',');
       $scope.count = arrayOfStrings.length;
    }
  };
}

})();
