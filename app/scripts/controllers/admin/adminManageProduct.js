angular.module('onlineGroceryStoreApp')
  .controller('AdminManageProductCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = true;
    
    $scope.isEditorProductDetailsEnabled = false;

    $scope.enableProductDetailsEditor = function() {
	    $scope.isEditorProductDetailsEnabled = true;    	
    }

    $scope.saveProductDetailsInfo = function() {
	    $scope.isEditorProductDetailsEnabled = false;
    }

  });