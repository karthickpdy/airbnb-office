angular.module('airbnb', ['angular.filter','ui.router','templates','Devise'])
    .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',
          resolve: {
            postPromise: ['listings', function(listings){
              return listings.getAll();
            }]
          }
        })
        .state('listings', {
          url: '/listings/{id}',
          templateUrl: 'listings/_listings.html',
          controller: 'ListingsCtrl',
          resolve: {
            listing: ['$stateParams', 'listings', function($stateParams, listings) {
              return listings.get($stateParams.id);
            }]
          }
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthCtrl'
        });

      $urlRouterProvider.otherwise('home');
    }])
