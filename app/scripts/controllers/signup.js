angular.module('onlineGroceryStoreApp')
  .controller('SignupCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    $rootScope.isMenuVisible = false;
    $rootScope.isAdminMenuVisible = false;


    $scope.isCustomer = true;


    $scope.register = function() {
    	alert('Registered');
    }

    $scope.updateUserRole = function(roleId) {
      if(roleId === 0) {
        $scope.isCustomer = true
      } else if(roleId === 1) {
        $scope.isCustomer = false;
      }
    }


  });
