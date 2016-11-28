 angular.module('onlineGroceryStoreApp')
  .controller('CustomerInfoCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  

  $scope.title = "Welcome to this demo!";
  $scope.editorEnabled = false;
  
  $scope.enableEditor = function() {
    $scope.editorEnabled = true;
    $scope.editableTitle = $scope.title;
  };
  
  $scope.disableEditor = function() {
    $scope.editorEnabled = false;
  };
  
  $scope.save = function() {
    $scope.title = $scope.editableTitle;
    $scope.disableEditor();
  };

  });
