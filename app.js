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
        });

      $urlRouterProvider.otherwise('home');
    }])
    .factory('listings', [function(){
      var o = {
        listings: [
          {name : 'listings 1', city : "Chennai"}, 
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
    ]);