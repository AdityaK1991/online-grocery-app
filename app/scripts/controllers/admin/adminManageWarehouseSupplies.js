angular.module('onlineGroceryStoreApp')
  .controller('AdminManageWarehouseSuppliesCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
  
  	$scope.products= [{
  		name:'Rice', size:150, qty:60, supplier:'S1'
  	},
  	{
  		name:'Spices', size:100, qty:30, supplier:'S2'
  	},
  	{
  		name:'Tomatoes', size:20, qty:100, supplier:'S3'
  	}]

  });