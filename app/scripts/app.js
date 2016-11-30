'use strict';

/**
 * @ngdoc overview
 * @name onlineGroceryStoreApp
 * @description
 * # onlineGroceryStoreApp
 *
 * Main module of the application.
 */
angular
  .module('onlineGroceryStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/product/:prodId', {
        templateUrl: 'views/productDetail.html',
        controller: 'ProductDetailCtrl',
        controllerAs: 'productDetail'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/customer-info', {
        templateUrl: 'views/customerInfo.html',
        controller: 'CustomerInfoCtrl',
        controllerAs: 'customerInfo'
      })
      .when('/order-history', {
        templateUrl: 'views/orderHistory.html',
        controller: 'OrderHistoryCtrl',
        controllerAs: 'orderHistory'
      })
      .when('/register', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl',
        controllerAs: 'signin'
      })
      .when('/forgotPassword', {
        templateUrl: 'views/forgotPassword.html',
        controller: 'ForgotPasswordCtrl',
        controllerAs: 'forgotPassword'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
