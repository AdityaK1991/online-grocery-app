angular.module('onlineGroceryStoreApp')
  .controller('SignupCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  

    $scope.register = function() {
    	alert('Registered');
    }
  });
