 angular.module('onlineGroceryStoreApp')
  .controller('CustomerInfoCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    $rootScope.isMenuVisible = false;

 /* First Name */

  $scope.fName = "Test FName";
  $scope.lName = "Test LName";
  $scope.addressL1 = "Address L1";
  $scope.addressL2 = "Address L2";
  $scope.city = "City";
  $scope.state = "State";
  $scope.zip = 60616;
  $scope.country = "Country";
  $scope.phone = 1234567890;

  $scope.editorCustomerInfoEnabled = false;
  
  $scope.enableCustomerInfoEditor = function() {
    $scope.editorCustomerInfoEnabled = true;
    $scope.editableFName = $scope.fName;
    $scope.editableLName = $scope.lName;
    $scope.editableAddressL1 = $scope.addressL1;
    $scope.editableAddressL2 = $scope.addressL2;
    $scope.editableCity = $scope.city;
    $scope.editableState = $scope.state;
    $scope.editableZip = $scope.zip;
    $scope.editableCountry = $scope.country;
    $scope.editablePhone = $scope.phone;
  };
  
  $scope.disableCustomerInfoEditor = function() {
    $scope.editorCustomerInfoEnabled = false;
  };
  
  $scope.saveCustomerInfo = function() {
    $scope.fName = $scope.editableFName;
    $scope.lName = $scope.editableLName;
    $scope.addressL1 = $scope.editableAddressL1;
    $scope.addressL2 = $scope.editableAddressL2;
    $scope.city = $scope.editableCity;
    $scope.state = $scope.editableState;
    $scope.zip = $scope.editableZip;
    $scope.country = $scope.editableCountry;
    $scope.phone = $scope.editablePhone;

    $scope.disableCustomerInfoEditor();
  };


// /* Last Name */
 
//   $scope.editorLNameEnabled = false;
  
//   $scope.enableLNameEditor = function() {
//     $scope.editorLNameEnabled = true;
//     $scope.editableLName = $scope.lName;
//   };
  
//   $scope.disableLNameEditor = function() {
//     $scope.editorLNameEnabled = false;
//   };
  
//   $scope.saveLName = function() {
//     $scope.lName = $scope.editableLName;
//     $scope.disableLNameEditor();
//   };


//   /* Address Line 1 */
 
//   $scope.editorAddressL1Enabled = false;
  
//   $scope.enableAddressL1Editor = function() {
//     $scope.editorAddressL1Enabled = true;
//     $scope.editableAddressL1 = $scope.addressL1;
//   };
  
//   $scope.disableAddressL1Editor = function() {
//     $scope.editorAddressL1Enabled = false;
//   };
  
//   $scope.saveAddressL1 = function() {
//     $scope.addressL1 = $scope.editableAddressL1;
//     $scope.disableAddressL1Editor();
//   };

//   /* Address Line 2 */
 
//   $scope.editorAddressL2Enabled = false;
  
//   $scope.enableAddressL2Editor = function() {
//     $scope.editorAddressL2Enabled = true;
//     $scope.editableAddressL2 = $scope.addressL2;
//   };
  
//   $scope.disableAddressL2Editor = function() {
//     $scope.editorAddressL2Enabled = false;
//   };
  
//   $scope.saveAddressL2 = function() {
//     $scope.addressL2 = $scope.editableAddressL2;
//     $scope.disableAddressL2Editor();
//   };


//   /* City */
 
//   $scope.editorCityEnabled = false;
  
//   $scope.enableCityEditor = function() {
//     $scope.editorCityEnabled = true;
//     $scope.editableCity = $scope.city;
//   };
  
//   $scope.disableCityEditor = function() {
//     $scope.editorCityEnabled = false;
//   };
  
//   $scope.saveCity = function() {
//     $scope.city = $scope.editableCity;
//     $scope.disableCityEditor();
//   };

// /* State */
 
//   $scope.editorStateEnabled = false;
  
//   $scope.enableStateEditor = function() {
//     $scope.editorStateEnabled = true;
//     $scope.editableState = $scope.state;
//   };
  
//   $scope.disableStateEditor = function() {
//     $scope.editorStateEnabled = false;
//   };
  
//   $scope.saveState = function() {
//     $scope.state = $scope.editableState;
//     $scope.disableStateEditor();
//   };


// /* Zip */
 
//   $scope.editorZipEnabled = false;
  
//   $scope.enableZipEditor = function() {
//     $scope.editorZipEnabled = true;
//     $scope.editableZip = $scope.zip;
//   };
  
//   $scope.disableZipEditor = function() {
//     $scope.editorZipEnabled = false;
//   };
  
//   $scope.saveZip = function() {
//     $scope.zip = $scope.editableZip;
//     $scope.disableZipEditor();
//   };


// /* Country */
 
//   $scope.editorCountryEnabled = false;
  
//   $scope.enableCountryEditor = function() {
//     $scope.editorCountryEnabled = true;
//     $scope.editableCountry = $scope.country;
//   };
  
//   $scope.disableCountryEditor = function() {
//     $scope.editorCountryEnabled = false;
//   };
  
//   $scope.saveCountry = function() {
//     $scope.country = $scope.editableCountry;
//     $scope.disableCountryEditor();
//   };

// /* Phone */
 
//   $scope.editorPhoneEnabled = false;
  
//   $scope.enablePhoneEditor = function() {
//     $scope.editorPhoneEnabled = true;
//     $scope.editablePhone = $scope.phone;
//   };
  
//   $scope.disablePhoneEditor = function() {
//     $scope.editorPhoneEnabled = false;
//   };
  
//   $scope.savePhone = function() {
//     $scope.phone = $scope.editablePhone;
//     $scope.disablePhoneEditor();
//   };




/* Name on Card */
 
 $scope.paymentMethods = [{id: 0, cardName: "sdfsff", cardNumber: 234234, cardMM: 11, cardYYYY: 2019}];

 $scope.paymentMethodsCopy = [];

  angular.forEach($scope.paymentMethods, function(value, key) {
    $scope.paymentMethodsCopy.push({
      id: value.id,
      isCardEditable: false
    });
  });

  $scope.enableCardEditor = function($index) {
    $scope.paymentMethodsCopy[$index].isCardEditable = true;
  };
  
  $scope.disableCardEditor = function($index) {
    $scope.paymentMethodsCopy[$index].isCardEditable = false;
  };
  
  $scope.saveCardInfo = function($index) {
    // angular.copy($scope.editedCard, $scope.paymentMethods[$scope.id]);

    $scope.disableCardEditor($index);
  };

  $scope.addPaymentMethod = function() {

    $scope.len = $scope.paymentMethods.length;

    $scope.paymentMethods.push(
      { 
        id: $scope.len+1,
        cardName: "sdfsff",
        cardNumber: null,
        cardMM: null,
        cardYYYY: null
      });

    $scope.paymentMethodsCopy.push({
      id: $scope.len+1,
      isCardEditable: false
    });
  }

  $scope.deleteCard = function($index) {
    $scope.paymentMethods.splice($index, 1);
    $scope.paymentMethodsCopy.splice($index, 1);

  }

// /* Card Number */
 
//   $scope.editorCardNumberEnabled = false;
  
//   $scope.enableCardNumberEditor = function() {
//     $scope.editorCardNumberEnabled = true;
//     $scope.cardNumber = $scope.cardNumber;
//   };
  
//   $scope.disableCardNumberEditor = function() {
//     $scope.editorCardNumberEnabled = false;
//   };
  
//   $scope.saveCardNumber = function() {
//     $scope.cardNumber = $scope.cardNumber;
//     $scope.disableCardNumberEditor();
//   };


// /* Card Month */
 
 

//   $scope.editorCardDateEnabled = false;
  
//   $scope.enableCardDateEditor = function() {
//     $scope.editorCardDateEnabled = true;
//     $scope.cardMM = $scope.cardMM;
//     $scope.cardYYYY = $scope.cardYYYY;
//   };
  
//   $scope.disableCardDateEditor = function() {
//     $scope.editorCardDateEnabled = false;
//   };
  
//   $scope.saveCardDate = function() {
//     $scope.cardMM = $scope.cardMM;
//     $scope.cardYYYY = $scope.cardYYYY;
//     $scope.disableCardDateEditor();
//   };


// /* Card Year*/
 
//   $scope.editorCardYYYYEnabled = false;
  
//   $scope.enableCardYYYYEditor = function() {
//     $scope.editorCardYYYYEnabled = true;
//     $scope.cardYYYY = $scope.cardYYYY;
//   };
  
//   $scope.disableCardYYYYEditor = function() {
//     $scope.editorCardYYYYEnabled = false;
//   };
  
//   $scope.save = function() {
//     $scope.cardYYYY = $scope.cardYYYY;
//     $scope.disableCardYYYYEditor();
//   };

  });
