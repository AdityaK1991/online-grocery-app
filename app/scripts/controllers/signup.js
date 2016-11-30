angular.module('onlineGroceryStoreApp')
  .controller('SignupCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    $rootScope.isMenuVisible = true;

    $scope.register = function() {
    	alert('Registered');
    }
  });
