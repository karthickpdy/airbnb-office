angular.module('airbnb', ['angular.filter','ui.router'])
    .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        })
        .state('listings', {
          url: '/listings/{id}',
          templateUrl: '/listings.html',
          controller: 'ListingsCtrl'
        });

      $urlRouterProvider.otherwise('home');
    }])
    .factory('listings', [function(){
      var o = {
        listings: [
          {name : 'listings 1', city : "Chennai", featured : true ,ameneties : ["canteen","internet"]}, 
          {name : 'listings 1', city : "Chennai", featured : false}, 
          {name : 'listings 1', city : "Mumbai"}, 
          {name : 'listings 1', city : "Delhi"}, 
          {name : 'listings 1', city : "Chennai"}, 
        ]
      };
      return o;
    }])
    .controller('MainCtrl', ['$scope','listings',
        function($scope,listings){
            $scope.test = 'Hello world!';       
            $scope.listings = listings.listings
            $scope.addPost = function(){
                // debugger
              if(!$scope.name || $scope.name === '') { return; }
              $scope.listings.push({name : $scope.name, city : "Chennai"});
              $scope.name = '';
            };

        }
    ])
    .controller('ListingsCtrl', ['$scope','$stateParams','listings',
        function($scope, $stateParams, listings){        
            $scope.listing = listings.listings[$stateParams.id];
        }]
    );