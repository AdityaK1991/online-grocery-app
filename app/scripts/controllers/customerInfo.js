 angular.module('onlineGroceryStoreApp')
  .controller('CustomerInfoCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  

 /* First Name */

  $scope.fName = "Test FName";
  $scope.editorFNameEnabled = false;
  
  $scope.enableFNameEditor = function() {
    $scope.editorFNameEnabled = true;
    $scope.editableFName = $scope.fName;
  };
  
  $scope.disableFNameEditor = function() {
    $scope.editorFNameEnabled = false;
  };
  
  $scope.saveFName = function() {
    $scope.fName = $scope.editableFName;
    $scope.disableFNameEditor();
  };


/* Last Name */
 
  $scope.lName = "Test LName";
  $scope.editorLNameEnabled = false;
  
  $scope.enableLNameEditor = function() {
    $scope.editorLNameEnabled = true;
    $scope.editableLName = $scope.lName;
  };
  
  $scope.disableLNameEditor = function() {
    $scope.editorLNameEnabled = false;
  };
  
  $scope.saveLName = function() {
    $scope.lName = $scope.editableLName;
    $scope.disableLNameEditor();
  };


  /* Address Line 1 */
 
  $scope.addressL1 = "Address L1";
  $scope.editorAddressL1Enabled = false;
  
  $scope.enableAddressL1Editor = function() {
    $scope.editorAddressL1Enabled = true;
    $scope.editableAddressL1 = $scope.addressL1;
  };
  
  $scope.disableAddressL1Editor = function() {
    $scope.editorAddressL1Enabled = false;
  };
  
  $scope.saveAddressL1 = function() {
    $scope.addressL1 = $scope.editableAddressL1;
    $scope.disableAddressL1Editor();
  };

  /* Address Line 2 */
 
  $scope.addressL2 = "Address L2";
  $scope.editorAddressL2Enabled = false;
  
  $scope.enableAddressL2Editor = function() {
    $scope.editorAddressL2Enabled = true;
    $scope.editableAddressL2 = $scope.addressL2;
  };
  
  $scope.disableAddressL2Editor = function() {
    $scope.editorAddressL2Enabled = false;
  };
  
  $scope.saveAddressL2 = function() {
    $scope.addressL2 = $scope.editableAddressL2;
    $scope.disableAddressL2Editor();
  };


  /* City */
 
  $scope.city = "City";
  $scope.editorCityEnabled = false;
  
  $scope.enableCityEditor = function() {
    $scope.editorCityEnabled = true;
    $scope.editableCity = $scope.city;
  };
  
  $scope.disableCityEditor = function() {
    $scope.editorCityEnabled = false;
  };
  
  $scope.saveCity = function() {
    $scope.city = $scope.editableCity;
    $scope.disableCityEditor();
  };

/* State */
 
  $scope.state = "State";
  $scope.editorStateEnabled = false;
  
  $scope.enableStateEditor = function() {
    $scope.editorStateEnabled = true;
    $scope.editableState = $scope.state;
  };
  
  $scope.disableStateEditor = function() {
    $scope.editorStateEnabled = false;
  };
  
  $scope.saveState = function() {
    $scope.state = $scope.editableState;
    $scope.disableStateEditor();
  };


/* Zip */
 
  $scope.zip = "Zip";
  $scope.editorZipEnabled = false;
  
  $scope.enableZipEditor = function() {
    $scope.editorZipEnabled = true;
    $scope.editableZip = $scope.zip;
  };
  
  $scope.disableZipEditor = function() {
    $scope.editorZipEnabled = false;
  };
  
  $scope.saveZip = function() {
    $scope.zip = $scope.editableZip;
    $scope.disableZipEditor();
  };


/* Zip */
 
  $scope.country = "Country";
  $scope.editorCountryEnabled = false;
  
  $scope.enableCountryEditor = function() {
    $scope.editorCountryEnabled = true;
    $scope.editableCountry = $scope.country;
  };
  
  $scope.disableCountryEditor = function() {
    $scope.editorCountryEnabled = false;
  };
  
  $scope.saveCountry = function() {
    $scope.country = $scope.editableCountry;
    $scope.disableCountryEditor();
  };

/* Phone */
 
  $scope.phone = 1234567890;
  $scope.editorPhoneEnabled = false;
  
  $scope.enablePhoneEditor = function() {
    $scope.editorPhoneEnabled = true;
    $scope.editablePhone = $scope.phone;
  };
  
  $scope.disablePhoneEditor = function() {
    $scope.editorPhoneEnabled = false;
  };
  
  $scope.savePhone = function() {
    $scope.phone = $scope.editablePhone;
    $scope.disablePhoneEditor();
  };




/* Name on Card */
 
  $scope.cardName = "cardName";
  $scope.editorCardNameEnabled = false;
  
  $scope.enableCardNameEditor = function() {
    $scope.editorCardNameEnabled = true;
    $scope.editableCardName = $scope.cardName;
  };
  
  $scope.disableCardNameEditor = function() {
    $scope.editorCardNameEnabled = false;
  };
  
  $scope.saveCardName = function() {
    $scope.cardName = $scope.editableCardName;
    $scope.disableCardNameEditor();
  };

/* Card Number */
 
  $scope.cardNumber = 1234;
  $scope.editorCardNumberEnabled = false;
  
  $scope.enableCardNumberEditor = function() {
    $scope.editorCardNumberEnabled = true;
    $scope.editableCardNumber = $scope.cardNumber;
  };
  
  $scope.disableCardNumberEditor = function() {
    $scope.editorCardNumberEnabled = false;
  };
  
  $scope.saveCardNumber = function() {
    $scope.cardNumber = $scope.editableCardNumber;
    $scope.disableCardNumberEditor();
  };


/* Card Month */
 
  $scope.cardMM = 11;
  $scope.cardYYYY = 2018;

  $scope.editorCardDateEnabled = false;
  
  $scope.enableCardDateEditor = function() {
    $scope.editorCardDateEnabled = true;
    $scope.editableCardMM = $scope.cardMM;
    $scope.editableCardYYYY = $scope.cardYYYY;
  };
  
  $scope.disableCardDateEditor = function() {
    $scope.editorCardDateEnabled = false;
  };
  
  $scope.saveCardDate = function() {
    $scope.cardMM = $scope.editableCardMM;
    $scope.cardYYYY = $scope.editableCardYYYY;
    $scope.disableCardDateEditor();
  };


// /* Card Year*/
 
//   $scope.editorCardYYYYEnabled = false;
  
//   $scope.enableCardYYYYEditor = function() {
//     $scope.editorCardYYYYEnabled = true;
//     $scope.editableCardYYYY = $scope.cardYYYY;
//   };
  
//   $scope.disableCardYYYYEditor = function() {
//     $scope.editorCardYYYYEnabled = false;
//   };
  
//   $scope.save = function() {
//     $scope.cardYYYY = $scope.editableCardYYYY;
//     $scope.disableCardYYYYEditor();
//   };

  });
